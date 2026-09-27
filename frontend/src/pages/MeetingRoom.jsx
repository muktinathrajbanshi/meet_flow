import { useNavigate, useParams } from "react-router-dom";
import { dummyUser } from "../assets/asset";
import { useCallback, useState } from "react";

const MeetingRoom = () => {
  const { meetingId } = useParams();
  const navigate = useNavigate();
  const userdata = dummyUser;

  const [isParticipantsOpen, setIsParticipantsOpen] = useState(false);

  const handleMeetingEnded = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return <div>Meting room</div>;
};

export default MeetingRoom;
