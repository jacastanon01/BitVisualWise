# BitVisualWise

Site built to help visualize various bitwise operations. This site was built using bitwise operations, each bit of the integer can be checked, turned on (or turned off) easily and quickly.

## Inspiration

### Background

Since beginning my journey to understand more about programming fundamentals, I had always been confounded by how bits are able to represent large amounts of data. How can a sequence of bytes (8 bits) represent numbers, certain character encodings, and even images to transfer to the computer.

I first encountered how to use bitwise operations in python from [boot.dev](http://boot.dev) where the lesson was to shift certain bits to ensure the correct user was given access. This was my first time learning about binary numbers and really understanding how a bunch of 1's and 0's can be grouped together to make magic happen.

I have a habit of being overly clever to the point of redudancy. "You could use bit shifting and the AND operand to get all the even numbers in an array!" I said to myself, but it's much simpler and readable to just use a modulo operator or simple floor division. However, bitwise operations are essential to know if you enjoy feeling like a true hackerman. So, after learning how to use bitwise operations in python, I wanted to build a site that would help me understand and visualize how this works.

### The question that sparked an interest

> You saw how the simple int type in Python can be used to represent a bit string.Write an ergonomic wrapper around int that can be used generically as a sequence of bits (make it iterable and implement **getitem**()). Reimplement CompressedGene, using the wrapper.

This is an exercise from "Classic Computer Science Problems in Python" by David Kopec. Because of the python object system, there is no way to declare an int in python with anything less than 28 bytes (224 bits). This can get inefficient as Kopen demonstrates when he tries to write a sequence of DNA. There are four nucleotids: "A", "C", "G", "T". These characters will be stored as their ascii values, but DNA can be a long sequence so this may not be the best way to hold the DNA in memory. So a bitstring was proposed where each nucleotid will be represented by two bits (because there are 4 options, all options can be represented in two bits).

Here we see the compression algorithm in practice. When a nucleotide is added, we shift the bits two spaces to make room for the new nucleotid. Then we change the last two bits to the appropriate value. This can be done by performing an OR operation on the int:

```python
def compress(sequence: str) -> int | None:
    bit_string: int = 1

    for nucleotide in sequence.upper():
        bit_string <<= 2
        if nucleotide == "A":  # change last two bits to 00
            bit_string |= 0b00
        elif nucleotide == "C":  # change last two bits to 01
            bit_string |= 0b01
        elif nucleotide == "G":  # change last two bits to 10
            bit_string |= 0b10
        elif nucleotide == "T":  # change last two bits to 11
            bit_string |= 0b11
        else:
            raise ValueError("Invalid Nucleotide:{}".format(nucleotide))
        return bit_string
```

We can decompress by looping through the sequence two bits at a time and comparing them to the character we have matched to that bit. If we find a match, we add the character to our string and then shift the bits to the right 2 spaces so that the next iteration will look at the next two bits in the bitstring:

```python
def decompress(bit_string: int) -> str:
    gene: str = ""
    for i in range(0, bit_string.bit_length() - 1, 2):  # - 1 to exclude sentinel
        bits: int = bit_string >> i & 0b11  # get just 2 relevant bits
        if bits == 0b00:  # A
            gene += "A"
        elif bits == 0b01:  # C
            gene += "C"
        elif bits == 0b10:  # G
            gene += "G"
        elif bits == 0b11:  # T
            gene += "T"
        else:
            raise ValueError("Invalid bits:{}".format(bits))
    return gene[::-1]
```

The question asks to create a generic class that will take in an int and create an iterable. This was my solution:

```python
    class BitWrapper:
    def __init__(self, value: int = 0):
        self.value = value

    def __iter__(self):
        return (int(bit) for bit in bin(self.value)[2:])

    def __getitem__(self, index: int) -> int:
        bin_str = bin(self.value)[2:]
        if index < 0 or index >= len(bin_str):
            raise IndexError("Bit index out of range")
        return int(bin_str[index])

    def __repr__(self) -> str:
        return f"BitWrapper({bin(self.value)})"

    def __int__(self):
        return self.value

    def __or__(self, other):
        return BitWrapper(self.value | other.value)

    def __lshift__(self, other):
        return BitWrapper(self.value << other)

    def __rshift__(self, other):
        return BitWrapper(self.value >> other)

    def bit_length(self):
        return self.value.bit_length()
```

The idea of iterating through the bits of any value was fascinating to me and I knew this would be a great foundation for visualizing bitwise operations. So I went back to my trusty friend javascript to recreate this class and bring this idea to the web.

## What it does

This site allows the user to enter an integer and then see the binary representation of that number and also be able to toggle each bit of the integer by shifting or performing bitwise operations.

## How I built it

This site was built with ReactJS using the vite-react-ts template.
