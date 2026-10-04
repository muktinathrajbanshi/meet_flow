import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const ControlBar = ({
  roomId,
  audioEnabled,
  videoEnabled,
  onToggleAudio,
  onToggleVideo,
  onToggleChat,
  onToggleParticipants,
  isChatOpen,
  isParticipantsOpen,
  unreadCount,
  participantCount,
  isHost,
  onLeave,
  onEndMeeting,
}) => {
  const [copied, setCopied] = useState(false);

  const copyMeetingId = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Meeting link copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer
      className="w-full bg-white/90 backdrop-blur-md border-t border-slate-200/80
    px-6 py-4 flex items-center justify-between z-40 shadow-lg shadow-slate-200/50"
    >
      {/* Left Info / Copy Link  */}
      <div className="hidden sm:flex items-center gap-3">
        <span
          className="text-xs font-medium text-slate-600 font-mono
            tracking-wider"
        >
          Id: {roomId}
        </span>
        <button
          onClick={copyMeetingId}
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200
            border border-slate-300 text-slate-700 hover:text-slate-900 flex items-center gap-1.5
            text-xs font-medium cursor-pointer transition-all"
        >
          {copied ? (
            <CheckIcon className="w-3.5 h-3.5 text-emerald-600" />
          ) : (
            <CopyIcon className="w-3.5 h-3.5" />
          )}
          <span>{copied ? "Copied" : "Copy Link"}</span>
        </button>
      </div>

      {/* Center Controls  */}

      {/* Right placeholder  */}
    </footer>
  );
};

export default ControlBar;
