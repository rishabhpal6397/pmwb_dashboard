import { useState } from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

export default function Training() {
  const [collapsed, setCollapsed] = useState(false);

  // Sample data for the table
  const [versionHistory, setVersionHistory] = useState([
    {
      SNo: "1",
      TrainingRequirement: "React Basics",
      Typeoftraining: "Technical",
      NoOfPeopleToBeTrained: "10",
      PeopleToBeTrained: "A, B, C",
      Peopletrained: "A, B",
      TrainingCompletionDate: "2026-05-14",
      TrainingEffortInPersonHours: "8",
      Status: "In Progress",
      Remarks: "Ongoing",
    },
  ]);

  // New row state
  const [newRow, setNewRow] = useState({
    SNo: "",
    TrainingRequirement: "",
    Typeoftraining: "",
    NoOfPeopleToBeTrained: "",
    PeopleToBeTrained: "",
    Peopletrained: "",
    TrainingCompletionDate: "",
    TrainingEffortInPersonHours: "",
    Status: "",
    Remarks: "",
  });

  const [showNewRow, setShowNewRow] = useState(false);

  // Save new row
  const handleAddVersion = () => {
    setVersionHistory([...versionHistory, newRow]);

    setNewRow({
      SNo: "",
      TrainingRequirement: "",
      Typeoftraining: "",
      NoOfPeopleToBeTrained: "",
      PeopleToBeTrained: "",
      Peopletrained: "",
      TrainingCompletionDate: "",
      TrainingEffortInPersonHours: "",
      Status: "",
      Remarks: "",
   
    });

    setShowNewRow(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div
          className={`${
            collapsed ? "ml-20" : "ml-64"
          } flex-1 mt-16 min-h-screen bg-gray-100 p-6 space-y-6 overflow-x-hidden`}
        >
          <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold">Training Plan</h2>

              <button
                onClick={() => setShowNewRow(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
              >
                + Add New Plan
              </button>
            </div>

            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border p-3">S. No.</th>
                  <th className="border p-3">Training Requirement</th>
                  <th className="border p-3">Type Of Training</th>
                  <th className="border p-3">
                    No. of people to be trained
                  </th>
                  <th className="border p-3">
                    People to be trained (names)
                  </th>
                  <th className="border p-3">
                    People trained (names)
                  </th>
                  <th className="border p-3">
                    Training completion date
                  </th>
                  <th className="border p-3">
                    Training effort in person hours
                  </th>
                  <th className="border p-3">Status</th>
                  <th className="border p-3">Remarks</th>
                </tr>
              </thead>

              <tbody>
                {/* Existing rows */}
                {versionHistory.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-3">{item.SNo}</td>
                    <td className="border p-3">
                      {item.TrainingRequirement}
                    </td>
                    <td className="border p-3">
                      {item.Typeoftraining}
                    </td>
                    <td className="border p-3">
                      {item.NoOfPeopleToBeTrained}
                    </td>
                    <td className="border p-3">
                      {item.PeopleToBeTrained}
                    </td>
                    <td className="border p-3">
                      {item.Peopletrained}
                    </td>
                    <td className="border p-2">
  <div className="relative">
    {/* Calendar icon */}
    <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
      📅
    </span>

    <input
      type="date"
      value={newRow.TrainingCompletionDate}
      onChange={(e) =>
        setNewRow({
          ...newRow,
          TrainingCompletionDate: e.target.value,
        })
      }
      className="w-full border rounded px-2 py-1 pl-10"
    />
  </div>
</td>
                    <td className="border p-3">
                      {item.TrainingEffortInPersonHours}
                    </td>
                    <td className="border p-2">
  <select
    value={newRow.Status}
    onChange={(e) =>
      setNewRow({
        ...newRow,
        Status: e.target.value,
      })
    }
    className="w-full border rounded px-2 py-1 bg-white"
  >
    <option value="">📌Select Status</option>
    <option value="Planned">📅Planned</option>
    <option value="In Progress">⏳In Progress</option>
    <option value="Completed">✅Completed</option>
    <option value="Canceled">❌Canceled</option>
  </select>
</td>
                    <td className="border p-3">{item.Remarks}</td>
                  </tr>
                ))}

                {/* New row inputs */}
                {showNewRow && (
                  <tr>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.SNo}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                            SNo: e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.TrainingRequirement}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                            TrainingRequirement:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>

                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.Typeoftraining}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                            Typeoftraining:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.NoOfPeopleToBeTrained}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        NoOfPeopleToBeTrained:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.PeopleToBeTrained}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        PeopleToBeTrained:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.Peopletrained}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        Peopletrained:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.TrainingCompletionDate}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        TrainingCompletionDate:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.TrainingEffortInPersonHours}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        TrainingEffortInPersonHours:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.Status}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        Status:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    <td className="border p-2">
                      <input
                        type="text"
                        value={newRow.Remarks}
                        onChange={(e) =>
                          setNewRow({
                            ...newRow,
                        Remarks:
                              e.target.value,
                          })
                        }
                        className="w-full border rounded px-2 py-1"
                      />
                    </td>
                    
                    
                    <td className="border p-2" colSpan={7}>
                      <div className="flex gap-2 justify-center">
                        <button
                          onClick={handleAddVersion}
                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                        >
                          Save
                        </button>

                        <button
                          onClick={() =>
                            setShowNewRow(false)
                          }
                          className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}