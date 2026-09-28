import { useEffect, useRef } from "react";
import UserIcon from "lucide-react";

const VideoTile = ({
  stream,
  name,
  isLocal = false,
  audioEnabled = true,
  videoEnabled = true,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div
      className="relative w-full h-full min-h-50 bg-slate-900 rounded-2xl overflow-hidden border
    border-slate-800 shadow-md flex items-center justify-center group"
    >
      {/* Video Element  */}
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isLocal}
        className={`w-full h-full object-cover transition-opacity duration-300 ${videoEnabled ? "opacity-100" : "opacity-0 pointer-events-none absolute"} ${isLocal ? "-scale-x-100" : ""}`}
      />
      {/* Camera Off Placeholder */}
      {!videoEnabled && (
        <div className="flex flex-col items-center justify-center space-y-3 z-10">
          <div
            className="w-20 h-20 rounded-full bg-indigo-600/20 border-2 border-indigo-400/40
          flex items-center justify-center text-indigo-300 text-2xl font-bold uppercase shadow-inner"
          >
            {name ? name.charAt(0) : <UserIcon className="w-8 h-8" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTile;
