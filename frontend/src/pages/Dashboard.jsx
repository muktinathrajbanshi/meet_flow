import { ShieldCheckIcon } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12 flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column - Actions  */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div
              className="inline-flex items-center gap-2 px-3.5 pr-6 py-2 rounded-full bg-white/25
            text-xs font-medium"
            >
              <ShieldCheckIcon size={16} />
              Secure Peer-to-Peer Encryption
            </div>
            <h1>
              High quality video calls. <br />
              <span className="text-primary">Built for everyone.</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg max-w-xl leading-relaxed">
              connect, collaborate, and celebrate from anywhere with ultra-low
              latency video, screen sharing, and real-time chat.
            </p>
          </div>
        </div>

        {/* Right Column - Hero Graphic & Clock Card  */}
      </div>
    </div>
  );
};

export default Dashboard;
