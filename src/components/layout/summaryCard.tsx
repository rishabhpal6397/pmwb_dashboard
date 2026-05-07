interface Props {
  title: string;
  value: string;
  type: "health" | "progress" | "risk" | "issue";
}

const SummaryCard = ({ title, value, type }: Props) => {
  const colors = {
    health: "border-green-500 bg-green-50",
    progress: "border-blue-500 bg-blue-50",
    risk: "border-yellow-500 bg-yellow-50",
    issue: "border-red-500 bg-red-50",
  };

  return (
    <div
      className={`p-4 rounded-xl border-l-4 shadow ${colors[type]}`}
    >
      <p className="text-sm text-gray-600">{title}</p>
      <h2 className="text-xl font-bold mt-1">{value}</h2>
    </div>
  );
};

export default SummaryCard;