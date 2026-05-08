import { useState } from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

export default function ProjectManagementTables() {
  const [projectInfo, setProjectInfo] = useState({
    projectName: "",
    codePIN: "",
    category: "",
    status: "",
    type: "",
  });

  const [customerInfo, setCustomerInfo] = useState({
    customerName: "",
    address: "",
    lineOfBusiness: "",
    primaryContact: "",
  });

  const [projectDates, setProjectDates] = useState({
    startDateSOW: "",
    plannedStart: "",
    revisedPlannedStart: "",
    actualStart: "",
    completionDateSOW: "",
    plannedCompletion: "",
    revisedPlannedCompletion: "",
    actualCompletion: "",
  });

  const [effortDetails, setEffortDetails] = useState({
    estimatedHours: "",
    actualEffortsConsumed: "",
    actualEffort: "",
    remainingEffort: "",
  });

  const [fteDetails, setFTEDetails] = useState({
    sowOnsiteFTEs: "",
    sowOffshoreFTEs: "",
    actualOnsiteFTEs: "",
    actualOffshoreFTEs: "",
  });

  const [versionHistory, setVersionHistory] = useState([
    {
      date: "20-May-2024",
      version: "1.0",
      changes: "Initial version created.",
      updatedBy: "John Doe",
    },
    {
      date: "27-May-2024",
      version: "1.1",
      changes: "Updated project dates and effort details.",
      updatedBy: "Jane Smith",
    },
    {
      date: "03-Jun-2024",
      version: "1.2",
      changes: "Revised FTE details.",
      updatedBy: "Michael Brown",
    },
  ]);

  const [newRow, setNewRow] = useState({
    date: "",
    version: "",
    changes: "",
    updatedBy: "",
  });

  const [showNewRow, setShowNewRow] = useState(false);

  const handleAddVersion = () => {
    if (
      newRow.date &&
      newRow.version &&
      newRow.changes &&
      newRow.updatedBy
    ) {
      setVersionHistory([...versionHistory, newRow]);
      setNewRow({
        date: "",
        version: "",
        changes: "",
        updatedBy: "",
      });
      setShowNewRow(false);
    }
  };
  return (
    <>  
    <div className="flex flex-col min-h-screen">
      {/* FULL WIDTH NAVBAR */}
      <Navbar />

      <div className="flex">
      {/* Sidebar */}
      <Sidebar />

            <div className="p-4 space-y-4 bg-gray-100 min-h-screen overflow-x-hidden">
            <h1 className="text-3xl font-bold text-center">Project Management Information</h1>

            {/* PROJECT INFORMATION */}
            <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">Project Information</h2>
                <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="border p-3">Project Name</th>
                    <th className="border p-3">Code / PIN</th>
                    <th className="border p-3">Category</th>
                    <th className="border p-3">Status</th>
                    <th className="border p-3">Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border p-2"><input type="text" value={projectInfo.projectName} onChange={(e) => setProjectInfo({ ...projectInfo, projectName: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter project name" /></td>
                    <td className="border p-2"><input type="text" value={projectInfo.codePIN} onChange={(e) => setProjectInfo({ ...projectInfo, codePIN: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter code/PIN" /></td>
                    <td className="border p-2"><input type="text" value={projectInfo.category} onChange={(e) => setProjectInfo({ ...projectInfo, category: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter category" /></td>
                    <td className="border p-2"><input type="text" value={projectInfo.status} onChange={(e) => setProjectInfo({ ...projectInfo, status: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter status" /></td>
                    <td className="border p-2"><input type="text" value={projectInfo.type} onChange={(e) => setProjectInfo({ ...projectInfo, type: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter type" /></td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* CUSTOMER INFORMATION */}
            <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">Customer Information</h2>
                <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="border p-3">Customer Name</th>
                    <th className="border p-3">Address</th>
                    <th className="border p-3">Line of Business</th>
                    <th className="border p-3">Primary Contact Person</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border p-2"><input type="text" value={customerInfo.customerName} onChange={(e) => setCustomerInfo({ ...customerInfo, customerName: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter customer name" /></td>
                    <td className="border p-2"><input type="text" value={customerInfo.address} onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter address" /></td>
                    <td className="border p-2"><input type="text" value={customerInfo.lineOfBusiness} onChange={(e) => setCustomerInfo({ ...customerInfo, lineOfBusiness: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter line of business" /></td>
                    <td className="border p-2"><input type="text" value={customerInfo.primaryContact} onChange={(e) => setCustomerInfo({ ...customerInfo, primaryContact: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter contact person" /></td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* PROJECT DATES */}
            <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">Project Dates</h2>
                <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="border p-3">Project Start Date in SOW</th>
                    <th className="border p-3">Planned Start Date</th>
                    <th className="border p-3">Revised Planned Start Date</th>
                    <th className="border p-3">Actual Start Date</th>
                    <th className="border p-3">Project Completion Date in SOW</th>
                    <th className="border p-3">Planned Completion Date</th>
                    <th className="border p-3">Revised Planned Completion Date</th>
                    <th className="border p-3">Actual Completion Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border p-2"><input type="date" value={projectDates.startDateSOW} onChange={(e) => setProjectDates({ ...projectDates, startDateSOW: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.plannedStart} onChange={(e) => setProjectDates({ ...projectDates, plannedStart: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.revisedPlannedStart} onChange={(e) => setProjectDates({ ...projectDates, revisedPlannedStart: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.actualStart} onChange={(e) => setProjectDates({ ...projectDates, actualStart: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.completionDateSOW} onChange={(e) => setProjectDates({ ...projectDates, completionDateSOW: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.plannedCompletion} onChange={(e) => setProjectDates({ ...projectDates, plannedCompletion: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.revisedPlannedCompletion} onChange={(e) => setProjectDates({ ...projectDates, revisedPlannedCompletion: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    <td className="border p-2"><input type="date" value={projectDates.actualCompletion} onChange={(e) => setProjectDates({ ...projectDates, actualCompletion: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" /></td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* EFFORT DETAILS */}
            <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">Effort Details</h2>
                <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="border p-3">Estimated Hours</th>
                    <th className="border p-3">Actual Efforts Consumed (Hrs)</th>
                    <th className="border p-3">Actual Effort (Hrs)</th>
                    <th className="border p-3">Remaining Effort</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border p-2"><input type="number" value={effortDetails.estimatedHours} onChange={(e) => setEffortDetails({ ...effortDetails, estimatedHours: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter hours" /></td>
                    <td className="border p-2"><input type="number" value={effortDetails.actualEffortsConsumed} onChange={(e) => setEffortDetails({ ...effortDetails, actualEffortsConsumed: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter hours" /></td>
                    <td className="border p-2"><input type="number" value={effortDetails.actualEffort} onChange={(e) => setEffortDetails({ ...effortDetails, actualEffort: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter hours" /></td>
                    <td className="border p-2"><input type="number" value={effortDetails.remainingEffort} onChange={(e) => setEffortDetails({ ...effortDetails, remainingEffort: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter hours" /></td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* FTE DETAILS */}
            <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
                <h2 className="text-2xl font-semibold mb-4">FTE Details</h2>
                <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-gray-200">
                    <tr>
                    <th className="border p-3">SOW Onsite FTEs</th>
                    <th className="border p-3">SOW Offshore FTEs</th>
                    <th className="border p-3">Actual Onsite FTEs</th>
                    <th className="border p-3">Actual Offshore FTEs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td className="border p-2"><input type="number" value={fteDetails.sowOnsiteFTEs} onChange={(e) => setFTEDetails({ ...fteDetails, sowOnsiteFTEs: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter FTEs" /></td>
                    <td className="border p-2"><input type="number" value={fteDetails.sowOffshoreFTEs} onChange={(e) => setFTEDetails({ ...fteDetails, sowOffshoreFTEs: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter FTEs" /></td>
                    <td className="border p-2"><input type="number" value={fteDetails.actualOnsiteFTEs} onChange={(e) => setFTEDetails({ ...fteDetails, actualOnsiteFTEs: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter FTEs" /></td>
                    <td className="border p-2"><input type="number" value={fteDetails.actualOffshoreFTEs} onChange={(e) => setFTEDetails({ ...fteDetails, actualOffshoreFTEs: e.target.value })} className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter FTEs" /></td>
                    </tr>
                </tbody>
                </table>
            </div>

            {/* VERSION HISTORY */}
            <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Version History</h2>

                <button
                    onClick={() => setShowNewRow(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                    + Add New Version
                </button>
                </div>

                <table className="w-full border border-gray-300 text-sm">
                <thead className="bg-blue-700 text-white">
                    <tr>
                    <th className="border p-3">Date</th>
                    <th className="border p-3">Version</th>
                    <th className="border p-3">Changes</th>
                    <th className="border p-3">Updated By</th>
                    <th className="border p-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {versionHistory.map((item, index) => (
                    <tr key={index}>
                        <td className="border p-3">{item.date}</td>
                        <td className="border p-3">{item.version}</td>
                        <td className="border p-3">{item.changes}</td>
                        <td className="border p-3">{item.updatedBy}</td>
                        <td className="border p-3 text-center">—</td>
                    </tr>
                    ))}

                    {showNewRow && (
                    <tr>
                        <td className="border p-2">
                        <input
                            type="date"
                            value={newRow.date}
                            onChange={(e) =>
                            setNewRow({ ...newRow, date: e.target.value })
                            }
                            className="w-full border rounded px-2 py-1"
                        />
                        </td>

                        <td className="border p-2">
                        <input
                            type="text"
                            placeholder="1.3"
                            value={newRow.version}
                            onChange={(e) =>
                            setNewRow({ ...newRow, version: e.target.value })
                            }
                            className="w-full border rounded px-2 py-1"
                        />
                        </td>

                        <td className="border p-2">
                        <input
                            type="text"
                            placeholder="Enter changes"
                            value={newRow.changes}
                            onChange={(e) =>
                            setNewRow({ ...newRow, changes: e.target.value })
                            }
                            className="w-full border rounded px-2 py-1"
                        />
                        </td>

                        <td className="border p-2">
                        <input
                            type="text"
                            placeholder="Updated By"
                            value={newRow.updatedBy}
                            onChange={(e) =>
                            setNewRow({ ...newRow, updatedBy: e.target.value })
                            }
                            className="w-full border rounded px-2 py-1"
                        />
                        </td>

                        <td className="border p-2 flex gap-2 justify-center">
                        <button
                            onClick={handleAddVersion}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                        >
                            Save
                        </button>

                        <button
                            onClick={() => setShowNewRow(false)}
                            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                        >
                            Cancel
                        </button>
                        </td>
                    </tr>
                    )}
                </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>

    </>
  );
}
