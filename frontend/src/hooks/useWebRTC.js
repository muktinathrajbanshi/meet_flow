import { useCallback, useEffect, useRef, useState } from "react";
import { dummyRemoteParticipants } from "../assets/asset";

const useWebRTC = (_roomId, user, onMeetingEnded, _enabled = true) => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState(dummyRemoteParticipants);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const localStreamRef = useRef(null);

  // Initialize local camera stream if available in browser
  const initLocalStream = useCallback(async () => {
    try {
      if (navigator?.mediaDevices?.getUserMedia) {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        localStreamRef.current = stream;
        setLocalStream(stream);
        return stream;
      }
    } catch (_error) {
      console.log("Mock WebRTC: Running in camera preview fallback mode");
    }
    return null;
  }, []);

  useEffect(() => {
    initLocalStream();

    return () => {
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [initLocalStream]);

  return <div></div>;
};

export default useWebRTC;
