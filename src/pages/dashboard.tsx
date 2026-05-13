import Sidebar from "../components/layout/sidebar";
import Navbar from "../components/layout/navbar";
import AlertBar from "../components/layout/alertBar";
import { useState } from "react";
import TemplateInfo from "../components/dashboard/templateInfo";
import Charts from "../components/dashboard/charts";
import Suggestions from "../components/dashboard/suggestions";
import ActivityLog from "../components/dashboard/activityLog";

import SummaryCard from "../components/layout/summaryCard";

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    
     <div className="flex flex-col min-h-screen">
      {/* FULL WIDTH NAVBAR */}
      <Navbar />
    

      
      <div className="flex">
      {/* Sidebar */}
      <Sidebar collapsed={collapsed}
  setCollapsed={setCollapsed} />

        {/* Main Content */}
        <div className={`${collapsed ? "ml-20" : "ml-64"}
                         flex-1
                         mt-16
                         min-h-screen
                        bg-gray-100
                          p-6 
                          w-full
                          overflow-auto
                          space-y-6`}>
          <AlertBar />
          <TemplateInfo />

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
          <SummaryCard title="Project Health" value="Good" type="health" />
          <SummaryCard title="Progress" value="72%" type="progress" 
          
          />
          <SummaryCard title="Risks" value="3" type="risk" />
          <SummaryCard title="Issues" value="2" type="issue" />
        </div>

          {/* Charts Section */}
          <Charts />

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-6">
            <Suggestions />
            <ActivityLog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;