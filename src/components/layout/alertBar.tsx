import { AlertTriangle, XCircle, CalendarDays } from "lucide-react";

const AlertBar = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-yellow-100 p-3 rounded flex items-center gap-2">
        <AlertTriangle className="text-yellow-600" />
        3 Risks need attention
      </div>

      <div className="bg-red-100 p-3 rounded flex items-center gap-2">
        <XCircle className="text-red-600" />
        2 Issues open
      </div>

      <div className="bg-green-100 p-3 rounded flex items-center gap-2">
        <CalendarDays className="text-green-600" />
        Deadline in 3 days
      </div>
    </div>
  );
};

export default AlertBar;