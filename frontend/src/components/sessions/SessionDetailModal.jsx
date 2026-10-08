const SessionDetailModal = ({ session, onClose }) => {
  if (!session) return null;

  const isEnded = session.status === "ended";

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center
    justify-center p-4"
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col
      shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in duration-150"
      >
        {/* Modal Header  */}
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span>ID: {session.meetingId}</span>
            </div>
          </div>
          <button></button>
        </div>

        {/* Tabs Title  */}

        {/* Tab Content  */}
      </div>
    </div>
  );
};

export default SessionDetailModal;
