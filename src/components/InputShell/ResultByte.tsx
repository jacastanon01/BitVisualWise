import atomConfigs from '@/lib/atomConfigs';

function ResultByte() {
  const [result, createResult] = atomConfigs.createResultsAtom();
  return <div>ResultByte</div>;
}
export default ResultByte;
