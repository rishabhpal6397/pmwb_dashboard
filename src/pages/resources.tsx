import { useState } from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

const Resources = () => {
  const effortRows = [
    "Project Team Effort (Man-Hrs)",
    "Testing Team Effort (Man-Hrs)",
    "Graphics Efforts (Man-Hrs)",
    "Tech. Writer Efforts (Man-Hrs)",
    "QAG Efforts (Man-Hrs)",
    "Organizational Efforts (Man-Hrs)",
    "PM Efforts (Man-Hrs)",
    "Architecture (Man-Hrs)",
    "Business Analyst Efforts (Man-Hrs)",
    "PMO Efforts (Man-Hrs)",
    "Total Project Efforts (Man-Hrs)",
  ];

  const levelRows = [
    "L1 (Man-Hrs)",
    "L2 (Man-Hrs)",
    "L3 (Man-Hrs)",
    "L4 (Man-Hrs)",
    "L5 (Man-Hrs)",
    "L6 (Man-Hrs)",
    "L7 (Man-Hrs)",
    "L8 (Man-Hrs)",
    "L9 (Man-Hrs)",
    "L10 (Man-Hrs)",
    "Total Project Efforts (Man-Hrs)",
  ];

  const locations = ["Offshore", "Onsite"] as const;
  type LocationType = (typeof locations)[number];

  const subColumns = ["Planned", "Actual", "Deviation (%)"];

  // ---------------- STATE ----------------
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState<LocationType>("Offshore");

  // ---------------- TABLE DATA ----------------
  type TableDataType = Record<
    LocationType,
    {
      typeWise: Record<string, Record<string, string>>;
      levelWise: Record<string, Record<string, string>>;
    }
  >;

  const createInitialData = (rows: string[]) => {
    const data: Record<string, Record<string, string>> = {};
    rows.forEach((row) => {
      data[row] = {};
      subColumns.forEach((column) => {
        data[row][column] = "0.00";
      });
    });
    return data;
  };

  const [tableData, setTableData] = useState<TableDataType>({
    Offshore: {
      typeWise: createInitialData(effortRows),
      levelWise: createInitialData(levelRows),
    },
    Onsite: {
      typeWise: createInitialData(effortRows),
      levelWise: createInitialData(levelRows),
    },
  });

  const handleChange = (
    section: "typeWise" | "levelWise",
    row: string,
    key: string,
    value: string
  ) => {
    setTableData((prev) => ({
      ...prev,
      [selectedLocation]: {
        ...prev[selectedLocation],
        [section]: {
          ...prev[selectedLocation][section],
          [row]: {
            ...prev[selectedLocation][section][row],
            [key]: value,
          },
        },
      },
    }));
  };

  // ---------------- LOCATION TOGGLE ----------------
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

  const currentTypeData = tableData[selectedLocation].typeWise;
  const currentLevelData = tableData[selectedLocation].levelWise;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

        <div
          className={`${
            collapsed ? "ml-20" : "ml-64"
          } flex-1 mt-16 bg-gray-100 p-6`}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Resources</h1>

          {/* ── TABLE 1: Resource Type Wise ── */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h3 className="font-semibold">
              Current Manpower Status Report (Resource Type Wise)
            </h3>
            <LocationToggle
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="table-fixed border-collapse border border-black text-sm w-full bg-white">
              <thead>
                <tr>
                  <th className="border border-black bg-purple-200 p-3 font-bold text-left w-72">
                    Effort as per Type (Man-hours)
                  </th>
                  {subColumns.map((column) => (
                    <th
                      key={column}
                      className="border border-black bg-gray-200 p-2 text-center font-medium"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
                <tr>
                  <th
                    colSpan={4}
                    className="border border-black bg-blue-100 p-3 text-center text-xl font-bold"
                  >
                    {selectedLocation}
                  </th>
                </tr>
              </thead>
              <tbody>
                {effortRows.map((row) => (
                  <tr key={row}>
                    <td className="border border-black p-3">{row}</td>
                    {subColumns.map((column) => (
                      <td key={column} className="border border-black p-2">
                        <input
                          type="text"
                          className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={currentTypeData[row][column]}
                          onChange={(e) =>
                            handleChange("typeWise", row, column, e.target.value)
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── TABLE 2: Resource Level Wise ── */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <h3 className="font-semibold">
              Current Manpower Status Report (Resource Level Wise)
            </h3>
            <LocationToggle
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
            />
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="table-fixed border-collapse border border-black text-sm w-full bg-white">
              <thead>
                <tr>
                  <th className="border border-black bg-purple-200 p-3 font-bold text-left w-72">
                    Effort as per Level (Man-hours)
                  </th>
                  {subColumns.map((column) => (
                    <th
                      key={column}
                      className="border border-black bg-gray-200 p-2 text-center font-medium"
                    >
                      {column}
                    </th>
                  ))}
                </tr>
                <tr>
                  <th
                    colSpan={4}
                    className="border border-black bg-blue-100 p-3 text-center text-xl font-bold"
                  >
                    {selectedLocation}
                  </th>
                </tr>
              </thead>
              <tbody>
                {levelRows.map((row) => (
                  <tr key={row}>
                    <td className="border border-black p-3">{row}</td>
                    {subColumns.map((column) => (
                      <td key={column} className="border border-black p-2">
                        <input
                          type="text"
                          className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          value={currentLevelData[row][column]}
                          onChange={(e) =>
                            handleChange(
                              "levelWise",
                              row,
                              column,
                              e.target.value
                            )
                          }
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;