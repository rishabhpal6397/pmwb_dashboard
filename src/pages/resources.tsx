import { useState } from "react";
import Navbar from "../components/layout/navbar";
import Sidebar from "../components/layout/sidebar";

// ── Types ──────────────────────────────────────────────────────────────────
type LocationType = "Offshore" | "Onsite";

type SubColData = Record<string, string>; // { Planned: "0.00", Actual: "0.00", "Deviation (%)": "0.00" }

type SectionData = Record<string, SubColData>; // { "L1 (Man-Hrs)": SubColData, ... }

type TableData = Record<LocationType, { typeWise: SectionData; levelWise: SectionData }>;

type SimpleRow = Record<string, string>; // { "Employee Code": "", "Name Of Resource": "", ... }

// ── Constants ──────────────────────────────────────────────────────────────
const LOCATIONS: LocationType[] = ["Offshore", "Onsite"];

const SUB_COLUMNS = ["Planned", "Actual", "Deviation (%)"];

const EFFORT_ROWS = [
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

const LEVEL_ROWS = [
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

const SIMPLE_COLUMNS = [
  "Employee Code",
  "Name Of Resource",
  "Type",
  "Offshore Effort (Current Month)",
  "Onsite (Current Month)",
  "Availability Status",
  "%Billable (Planned in Current Month)",
  "%Billable (Actual in Current Month)",
];

const SIMPLE_ROW_COUNT = 9;

// ── Helpers ────────────────────────────────────────────────────────────────
const buildSectionData = (rows: string[]): SectionData =>
  Object.fromEntries(
    rows.map((row) => [
      row,
      Object.fromEntries(SUB_COLUMNS.map((col) => [col, "0.00"])),
    ])
  );

const buildInitialTableData = (): TableData => ({
  Offshore: {
    typeWise: buildSectionData(EFFORT_ROWS),
    levelWise: buildSectionData(LEVEL_ROWS),
  },
  Onsite: {
    typeWise: buildSectionData(EFFORT_ROWS),
    levelWise: buildSectionData(LEVEL_ROWS),
  },
});

const buildInitialSimpleRows = (): SimpleRow[] =>
  Array.from({ length: SIMPLE_ROW_COUNT }, () =>
    Object.fromEntries(SIMPLE_COLUMNS.map((col) => [col, ""]))
  );

// ── Sub-components ─────────────────────────────────────────────────────────
interface LocationToggleProps {
  selected: LocationType;
  onChange: (loc: LocationType) => void;
}

const LocationToggle = ({ selected, onChange }: LocationToggleProps) => (
  <div className="inline-flex rounded-lg border border-gray-300 overflow-hidden">
    {LOCATIONS.map((loc) => (
      <button
        key={loc}
        type="button"
        onClick={() => onChange(loc)}
        className={`px-4 py-2 text-sm font-medium transition-colors ${
          selected === loc
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-700 hover:bg-gray-100"
        }`}
      >
        {loc}
      </button>
    ))}
  </div>
);

interface ManpowerTableProps {
  title: string;
  headerLabel: string;
  rows: string[];
  data: SectionData;
  location: LocationType;
  onLocationChange: (loc: LocationType) => void;
  onCellChange: (row: string, col: string, value: string) => void;
}

const ManpowerTable = ({
  title,
  headerLabel,
  rows,
  data,
  location,
  onLocationChange,
  onCellChange,
}: ManpowerTableProps) => (
  <div className="mb-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
      <h3 className="font-semibold">{title}</h3>
      <LocationToggle selected={location} onChange={onLocationChange} />
    </div>

    <div className="overflow-x-auto">
      <table className="table-fixed border-collapse border border-black text-sm w-full bg-white">
        <thead>
          <tr>
            <th className="border border-black bg-purple-200 p-3 font-bold text-left w-72">
              {headerLabel}
            </th>
            {SUB_COLUMNS.map((col) => (
              <th
                key={col}
                className="border border-black bg-gray-200 p-2 text-center font-medium"
              >
                {col}
              </th>
            ))}
          </tr>
          <tr>
            <th
              colSpan={4}
              className="border border-black bg-blue-100 p-3 text-center text-xl font-bold"
            >
              {location}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row}>
              <td className="border border-black p-3 font-medium">{row}</td>
              {SUB_COLUMNS.map((col) => (
                <td key={col} className="border border-black p-2">
                  <input
                    type="text"
                    className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={data[row]?.[col] ?? "0.00"}
                    onChange={(e) => onCellChange(row, col, e.target.value)}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────
const Resources = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<LocationType>("Offshore");
  const [tableData, setTableData] = useState<TableData>(buildInitialTableData);
  const [simpleRows, setSimpleRows] = useState<SimpleRow[]>(buildInitialSimpleRows);

  // Handler for Tables 1 & 2
  const handleManpowerChange = (
    section: "typeWise" | "levelWise",
    row: string,
    col: string,
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
            [col]: value,
          },
        },
      },
    }));
  };

  // Handler for Table 3
  const handleSimpleChange = (rowIndex: number, col: string, value: string) => {
    setSimpleRows((prev) => {
      const updated = [...prev];
      updated[rowIndex] = { ...updated[rowIndex], [col]: value };
      return updated;
    });
  };

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
          <ManpowerTable
            title="Current Manpower Status Report (Resource Type Wise)"
            headerLabel="Effort as per Type (Man-hours)"
            rows={EFFORT_ROWS}
            data={currentTypeData}
            location={selectedLocation}
            onLocationChange={setSelectedLocation}
            onCellChange={(row, col, val) =>
              handleManpowerChange("typeWise", row, col, val)
            }
          />

          {/* ── TABLE 2: Resource Level Wise ── */}
          <ManpowerTable
            title="Current Manpower Status Report (Resource Level Wise)"
            headerLabel="Effort as per Level (Man-hours)"
            rows={LEVEL_ROWS}
            data={currentLevelData}
            location={selectedLocation}
            onLocationChange={setSelectedLocation}
            onCellChange={(row, col, val) =>
              handleManpowerChange("levelWise", row, col, val)
            }
          />

          {/* ── TABLE 3: Simple Resource Table ── */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Resource Details</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-black text-sm bg-white">
                <thead className="bg-gray-100">
                  <tr>
                    {SIMPLE_COLUMNS.map((col) => (
                      <th
                        key={col}
                        className="border border-black px-4 py-3 text-center font-semibold min-w-[180px]"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {simpleRows.map((rowData, rowIndex) => (
                    <tr key={rowIndex}>
                      {SIMPLE_COLUMNS.map((col) => (
                        <td
                          key={col}
                          className="border border-black p-2 min-w-[180px]"
                        >
                          <input
                            type="text"
                            className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={rowData[col] ?? ""}
                            onChange={(e) =>
                              handleSimpleChange(rowIndex, col, e.target.value)
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
    </div>
  );
};

export default Resources;