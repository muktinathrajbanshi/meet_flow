import { ShieldCheckIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Actions  */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div>
              <ShieldCheckIcon size={16} />
            </div>
          </div>
        </div>

        {/* Right Column - Hero Graphic & Clock Card  */}
      </div>
    </div>
  );
};

export default Dashboard;
