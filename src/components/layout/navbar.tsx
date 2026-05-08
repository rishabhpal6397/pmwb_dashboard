import { Bell } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 left-0 bg-white z-50 shadow flex justify-between items-center px-6 py-3">
      
      {/* LEFT SIDE (LOGO SPACE) */}
      <div className="flex items-center gap-3">
        
        <div className="w-10 h-10 flex items-center justify-center">
          <img src={logo} alt="logo" className="w-full h-full object-contain" />
        </div>
        
        
        <h1 className="font-bold text-lg">PMWB Dashboard</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6 relative">
        <div className="relative curson-pointer group">
          <Bell />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">
            2
            <div className="absolute top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100">
              Notifications
            </div>
          </span>
          
        </div>

        {/* USER DROPDOWN */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="bg-gray-200 px-3 py-1 rounded cursor-pointer"
          >
            User ▽
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow rounded">
              <ul className="text-sm">
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>
                <li className="p-2 hover:bg-gray-100 cursor-pointer text-red-500">
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;