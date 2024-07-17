# BitVisualWise

<img width="1295" alt="Screenshot 2024-06-11 at 4 23 38 PM" src="https://github.com/jacastanon01/BitVisualWise/assets/24418510/807de1a6-c165-4c95-a568-ea7d42ca971f">

## What it does

This site allows the user to enter an integer and then see the binary representation of that number. They can then see the result of certain operations in binary by pressing the operand button.

## Made with

- React
- Typescript
- TailwindCSS
- Vite
- Jotai

## The question that sparked an interest

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

This got me interested in creating a site that can visualize how this operation was able to take place
