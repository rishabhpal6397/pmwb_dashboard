import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  BarChart3,
  Users,
  GraduationCap,
  Activity,
  AlertTriangle,
  CalendarDays,
  Settings,
  CheckSquare,
  Bug,
  Lightbulb,
  ClipboardCheck,
  Flag,
  BookOpen,
  TrendingUp,
  Menu,
} from "lucide-react";

const menuItems = [
  { name: "Main Page", icon: LayoutDashboard },
  { name: "Project Info", icon: FileText },
  { name: "PSR", icon: BarChart3 },
  { name: "Training", icon: GraduationCap },
  { name: "Resources", icon: Users },
  { name: "Metrics Planning & Tracking", icon: Activity },
  { name: "Risk Management", icon: AlertTriangle },
  { name: "Size, Schedule & Effort", icon: CalendarDays },
  { name: "Control Panel", icon: Settings },
  { name: "Quality of Work", icon: CheckSquare },
  { name: "Issue Management", icon: Bug },
  { name: "Opportunity Tracker", icon: Lightbulb },
  { name: "Verification Data & Summary", icon: ClipboardCheck },
  { name: "Project Closeout Meeting", icon: Flag },
  { name: "Lesson Learned", icon: BookOpen },
  { name: "Performance Metrics", icon: TrendingUp }
];

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-white h-screen shadow-md transition-all duration-300`}
    >
      {/* TOGGLE */}
      <div className="flex justify-between items-center p-4">
        {!collapsed && <span className="font-bold">Menu</span>}
        <Menu
          className="cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      {/* MENU */}
      <ul className="space-y-2 px-2">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <li
              key={index}
              className="group flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100"
            >
              <Icon className="w-5 h-5 text-gray-600 group-hover:text-black" />

              {!collapsed && (
                <span className="text-sm">{item.name}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;