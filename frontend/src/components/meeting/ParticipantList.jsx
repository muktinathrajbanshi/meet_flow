const ParticipantList = ({
  isOpen,
  onClose,
  localUser,
  localAudio,
  localVideo,
  remoteUsers,
  meetingHostId,
}) => {
  if (!isOpen) return null;

  const allParticipants = [
    {
      socketId: "local",
      userId: localUser?.id,
      userName: `${localUser?.name || "you"} (You)`,
      audioEnabled: localAudio,
      videoEnabled: localVideo,
      isLocal: true,
    },
    ...remoteUsers,
  ];

  return (
    <aside
      className="w-full sm:w-80 h-full bg-white border-l border-slate-200 flex 
    flex-col z-30 shadow-2xl animate-in slide-in-from-right duration-200"
    >
      {/* Header  */}
      <div className="p-4 border-b border-slate-200 flex items-center justify-between">
        <h3>Participants ({allParticipants.length})</h3>
        <button
          onClick={onClose}
          className="p-1.5 rounded-xl hover:bg-slate-100 text-slate-500
        hover:text-slate-900 transition-colors cursor-pointer"
        >
          <XIcon className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default ParticipantList;
