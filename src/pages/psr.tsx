import { useState } from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";
import Dates from "../components/layout/dates";

const effortRows = [
  "Project Team Effort (Man-Hrs)",
  "Testing Team Effort (Man-Hrs)",
  "Graphics Efforts (Man-Hrs)",
  "Tech. Writer Efforts (Man-Hrs)",
  "QA Efforts (Man-Hrs)",
  "Organizational Efforts (Man-Hrs)",
  "PM Efforts (Man-Hrs)",
  "Architecture (Man-Hrs)",
  "Business Analyst Efforts (Man-Hrs)",
  "PMO Efforts (Man-Hrs)",
  "Total Project Efforts (Man-Hrs)",
];

const resourceLevels = ["L1", "L2", "L3", "L4", "L5", "L6", "L7", "L8", "L9", "L10"];

const periods = [
  "Upto Last Period",
  "Current Period",
  "Current Cumulative",
];

const subColumns = ["Planned", "Actual", "Deviation (%)"];

const locations = ["Offshore", "Onsite"] as const;

type LocationType = (typeof locations)[number];

type TableDataType = Record<LocationType, Record<string, Record<string, string>>>;

const createInitialData = (): Record<string, Record<string, string>> => {
  const data: Record<string, Record<string, string>> = {};
  const allRows = [...effortRows, ...resourceLevels];
  allRows.forEach((row) => {
    data[row] = {};
    periods.forEach((period) => {
      subColumns.forEach((column) => {
        const key = `${period}-${column}`;
        data[row][key] = "0.00";
      });
    });
  });
  return data;
};

const LocationToggle = ({
  selectedLocation,
  setSelectedLocation,
}: {
  selectedLocation: LocationType;
  setSelectedLocation: (loc: LocationType) => void;
}) => (
  <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
    {locations.map((location) => (
      <button
        key={location}
        onClick={() => setSelectedLocation(location)}
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          selectedLocation === location
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        {location}
      </button>
    ))}
  </div>
);

const PSR = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [selectedLocation, setSelectedLocation] = useState<LocationType>("Offshore");

  const [tableData, setTableData] = useState<TableDataType>({
    Offshore: createInitialData(),
    Onsite: createInitialData(),
  });

  const handleChange = (row: string, key: string, value: string) => {
    setTableData((prev) => ({
      ...prev,
      [selectedLocation]: {
        ...prev[selectedLocation],
        [row]: {
          ...prev[selectedLocation][row],
          [key]: value,
        },
      },
    }));
  };

  const currentData = tableData[selectedLocation];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div
          className={`${collapsed ? "ml-20" : "ml-64"} flex-1 mt-16 min-h-screen bg-gray-100 p-6 space-y-6 overflow-x-hidden`}
        >
          <Dates />

          {/* Project Status Review Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6 overflow-x-auto">
            <h3 className="text-2xl font-semibold mb-4">Project Status Review</h3>

            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border p-3">Planned Productivity (Till Current period)</th>
                  <th className="border p-3">Actual Productivity (Till Current period)</th>
                  <th className="border p-3">Current Team Size</th>
                  <th className="border p-3">No. of Persons Resigned</th>
                  <th className="border p-3">No. of Persons currently Not Available in project</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {[
                    "Planned Productivity",
                    "Actual Productivity",
                    "Current Team Size",
                    "Persons Resigned",
                    "Persons Not Available",
                  ].map((label) => (
                    <td key={label} className="border p-2">
                      <input
                        type="text"
                        className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

            <br />

            <table className="w-full table-fixed border border-gray-300 text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border p-3 w-1/11">Resource Level</th>
                  {resourceLevels.map((level) => (
                    <th key={level} className="border p-3">
                      {level}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 bg-gray-300 text-center font-bold">No#</td>
                  {resourceLevels.map((level) => (
                    <td key={level} className="border p-2">
                      <input
                        type="text"
                        className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="0"
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Effort Section Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6">

            {/* ── Effort as per Type ── */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h2 className="text-2xl font-semibold">Project Effort</h2>
              <h3 className="text-center font-semibold">Effort as per Type (Man-hours)</h3>
              {/* First toggle – right-aligned via flex */}
              <LocationToggle
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
              />
            </div>

            <div className="overflow-x-auto overflow-y-hidden">
              <table className="table-fixed border-collapse border border-black text-sm min-w-[1200px]">
                <thead>
                  <tr>
                    <th
                      rowSpan={3}
                      className="border border-black bg-purple-200 p-3 font-bold text-left w-72"
                    >
                      Effort as per Type (Man-hours)
                    </th>
                    <th
                      colSpan={9}
                      className="border border-black bg-blue-100 p-3 text-center text-2xl font-bold"
                    >
                      {selectedLocation}
                    </th>
                  </tr>
                  <tr>
                    {periods.map((period) => (
                      <th
                        key={period}
                        colSpan={3}
                        className="border border-black bg-gray-300 p-2 text-center font-semibold"
                      >
                        {period}
                      </th>
                    ))}
                  </tr>
                  <tr>
                    {periods.map((period) =>
                      subColumns.map((column) => (
                        <th
                          key={`${period}-${column}`}
                          className="border border-black bg-gray-200 p-2 text-center font-medium"
                        >
                          {column}
                        </th>
                      ))
                    )}
                  </tr>
                </thead>
                <tbody>
                  {effortRows.map((row) => (
                    <tr key={row}>
                      <td className="border border-black p-3">{row}</td>
                      {periods.map((period) =>
                        subColumns.map((column) => {
                          const key = `${period}-${column}`;
                          return (
                            <td key={key} className="border border-black p-2">
                              <input
                                type="text"
                                className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={currentData[row][key]}
                                onChange={(e) => handleChange(row, key, e.target.value)}
                              />
                            </td>
                          );
                        })
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Effort as per Resource Level ── */}
            {/* Second toggle – right-aligned */}
            <div className="flex items-center justify-between mt-8 mb-4">
              <h3 className="font-semibold text-center flex-1">
                Effort as per Resource Level (Man-hours)
              </h3>
              <LocationToggle
                selectedLocation={selectedLocation}
                setSelectedLocation={setSelectedLocation}
              />
            </div>

            <div className="overflow-x-auto overflow-y-hidden">
              <table className="table-fixed border-collapse border border-black text-sm min-w-[1200px]">
                <thead>
                  <tr>
                    <th
                      rowSpan={3}
                      className="border border-black bg-purple-200 p-3 font-bold text-left w-72"
                    >
                      Effort as per Resource Level (Man-hours)
                    </th>
                    <th
                      colSpan={9}
                      className="border border-black bg-blue-100 p-3 text-center text-2xl font-bold"
                    >
                      {selectedLocation}
                    </th>
                  </tr>
                  <tr>
                    {periods.map((period) => (
                      <th
                        key={period}
                        colSpan={3}
                        className="border border-black bg-gray-300 p-2 text-center font-semibold"
                      >
                        {period}
                      </th>
                    ))}
                  </tr>
                  <tr>
                    {periods.map((period) =>
                      subColumns.map((column) => (
                        <th
                          key={`${period}-${column}`}
                          className="border border-black bg-gray-200 p-2 text-center font-medium"
                        >
                          {column}
                        </th>
                      ))
                    )}
                  </tr>
                </thead>
                <tbody>
                  {resourceLevels.map((row) => (
                    <tr key={row}>
                      <td className="border border-black p-3">{row}</td>
                      {periods.map((period) =>
                        subColumns.map((column) => {
                          const key = `${period}-${column}`;
                          return (
                            <td key={key} className="border border-black p-2">
                              <input
                                type="text"
                                className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={currentData[row][key]}
                                onChange={(e) => handleChange(row, key, e.target.value)}
                              />
                            </td>
                          );
                        })
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Project Size Card */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4">Project Size (FP / Other count)</h3>
            <table className="w-full border border-gray-300 text-sm">
              <thead className="bg-gray-300">
                <tr>
                  <th className="border p-3">Project Size in FP / other-Count</th>
                  <th className="border p-3">Initial</th>
                  <th className="border p-3">Current Calculated</th>
                  <th className="border p-3">Last Calculated</th>
                  <th className="border p-3">Deviation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 bg-gray-300 text-center font-bold">
                    Value (FP / Other-Count)
                  </td>
                  {["Initial", "Current Calculated", "Last Calculated", "Deviation"].map(
                    (col) => (
                      <td key={col} className="border p-2">
                        <input
                          type="text"
                          className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="0"
                        />
                      </td>
                    )
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PSR;