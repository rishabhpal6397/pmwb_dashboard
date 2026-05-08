import { useState } from "react";

const TemplateInfo = () => {
  const [edit, setEdit] = useState(false);

  const [data, setData] = useState({
    project: "ABC Project",
    month: "Aug 2025",
    templateId: "ENPMT18",
    version: "1.3",
    author: "QMG",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-semibold text-lg">Template Info</h2>

        <button
          onClick={() => setEdit(!edit)}
          className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>

      {edit ? (
        <div className="grid grid-cols-2 gap-3 text-sm">
          <input
            name="project"
            value={data.project}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Project"
          />
          <input
            name="month"
            value={data.month}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Month"
          />
          <input
            name="templateId"
            value={data.templateId}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Template ID"
          />
          <input
            name="version"
            value={data.version}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Version"
          />
          <input
            name="author"
            value={data.author}
            onChange={handleChange}
            className="border p-2 rounded"
            placeholder="Author"
          />
        </div>
      ) : (
        <div className="text-gray-600 text-sm">
          <p>
            Project: {data.project} | Month: {data.month}
          </p>
          <p>
            Template ID: {data.templateId} | Version: {data.version} | Author:{" "}
            {data.author}
          </p>
        </div>
      )}
    </div>
  );
};

export default TemplateInfo;