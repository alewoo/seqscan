interface Result {
  id: string;
  description: string;
  sequence: string;
}

interface ResultsTableProps {
  results: Result[];
}

export default function ResultsTable({ results }: ResultsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ID</th>
            <th className="py-3 px-6 text-left">Description</th>
            <th className="py-3 px-6 text-left">Sequence</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {results.map((result, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {result.id}
              </td>
              <td className="py-3 px-6 text-left">{result.description}</td>
              <td className="py-3 px-6 text-left">{result.sequence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
