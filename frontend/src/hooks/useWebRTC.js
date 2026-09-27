import { useCallback, useRef, useState } from "react";
import { dummyRemoteParticipants } from "../assets/asset";

const useWebRTC = (_roomId, user, onMeetingEnded, _enabled = true) => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteUsers, setRemoteUsers] = useState(dummyRemoteParticipants);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(true);

  const localStreamRef = useRef(null);

  // Initialize local camera stream if available in browser
  const initLocalStream = useCallback(async () => {}, []);

  return <div></div>;
};

export default useWebRTC;
