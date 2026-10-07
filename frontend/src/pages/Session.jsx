import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import { dummySessions } from "../assets/asset";
import EmptySessions from "../components/sessions/EmptySessions";

const Session = () => {
  const [sessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const navigate = useNavigate();

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
      <div className="mb-8">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900">
          Meeting sessions
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Review your past and active meeting history, participant logs, and
          chat transcripts.
        </p>
      </div>

      {/* Sessions Grid / Empty State  */}
      {sessions.length === 0 ? (
        <EmptySessions />
      ) : (
        <div>
          <p>Session Card</p>
        </div>
      )}

      {/* Session Detail Modal  */}
      <p>Session Detail Modal</p>
    </main>
  );
};

export default Session;
