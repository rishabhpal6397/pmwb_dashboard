import { useState } from "react";
import { Link } from "react-router-dom";
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
  { name: "Main Page", icon: LayoutDashboard, path: "/" },
  { name: "Project Info", icon: FileText, path: "/project-info" },
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
      }bg-white
          h-screen
          border-r border-gray-200
          flex-shrink-0
          transition-all duration-300`}
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
            <li key={index}>
              {item.path ? (
                <Link
                  to={item.path}
                  className="group flex items-center gap-3
                              px-3 py-2
                              rounded-lg
                              text-gray-600
                              hover:bg-blue-50
                              hover:text-blue-600
                              transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                  {!collapsed && <span className="text-sm">{item.name}</span>}
                </Link>
              ) : (
                <div className="group flex items-center gap-3
                                px-3 py-2
                                rounded-lg
                                cursor-pointer
                                text-gray-600
                                hover:bg-blue-50
                                hover:text-blue-600
                                transition-colors duration-200">
                  <Icon className="w-5 h-5 text-gray-600 group-hover:text-black" />
                  {!collapsed && <span className="text-sm">{item.name}</span>}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;