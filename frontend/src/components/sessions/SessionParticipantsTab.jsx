import { UserIcon } from "lucide-react";

const SessionParticipantsTab = ({ participants = [], host }) => {
  if (participants.length === 0) {
    return (
      <div
        className="h-full flex flex-col items-center justify-center text-slate-400
            text-sm py-12"
      >
        <UserIcon className="w-8 h-8 mb-2 text-slate-300" />
        <p>No participant logs recorded. </p>
      </div>
    );
  }

  const hostId = host?.id;

  return (
    <div className="space-y-2.5">
      {participants.map((p, idx) => {
        const participantUserId = p.user?.id || p.user;
        const isHost = Boolean(
          hostId &&
          participantUserId &&
          participantUserId.toString() === hostId.toString(),
        );
        return (
          <div
            key={idx}
            className="flex items-center justify-between p-3 rounded-2xl
            bg-slate-50 border border-slate-100"
          ></div>
        );
      })}
    </div>
  );
};

export default SessionParticipantsTab;
