import Sidebar from "../components/layout/sidebar";
import Navbar from "../components/layout/navbar";
import AlertBar from "../components/layout/alertBar";

import TemplateInfo from "../components/dashboard/templateInfo";
import Charts from "../components/dashboard/charts";
import Suggestions from "../components/dashboard/suggestions";
import ActivityLog from "../components/dashboard/activityLog";

import SummaryCard from "../components/layout/summaryCard";

const Dashboard = () => {
  return (

     <div className="flex flex-col min-h-screen">
      {/* FULL WIDTH NAVBAR */}
      <Navbar />
    

      
      <div className="flex">
      {/* Sidebar */}
      <Sidebar />

        {/* Main Content */}
        <div className="flex-1 bg-gray-50 p-6 space-y-6">
          <AlertBar />
          <TemplateInfo />

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
          <SummaryCard title="Project Health" value="Good" type="health" />
          <SummaryCard title="Progress" value="72%" type="progress" />
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