import { CalendarDays } from "lucide-react";

const Dates = () => {
    return(
    <>
        <div className="grid grid-cols-3 gap-4">
                        <div className="bg-yellow-100 p-3 rounded flex items-center gap-2">
                            <CalendarDays className="text-yellow-600" />
                            Project Start Date
                        </div>

                        <div className="bg-red-100 p-3 rounded flex items-center gap-2">
                            <CalendarDays className="text-red-600" />
                            Project End Date
                        </div>

                        <div className="bg-green-100 p-3 rounded flex items-center gap-2">
                            <CalendarDays className="text-green-600" />
                            Current Date
                        </div>
        </div>
    </>
        
    );
};

export default Dates;