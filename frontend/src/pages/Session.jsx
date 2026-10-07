import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

const Session = () => {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-12">
      {/* Page Title & Navigation Header  */}
      <Link
        to="/dashboard"
        className="flex items-center text-sm gap-1 mb-4 text-slate-500
      hover:text-slate-900 transition-colors"
      >
        <ArrowLeftIcon size={14} /> Go to Dashboard
      </Link>
    </main>
  );
};

export default Session;
