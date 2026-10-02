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

  return <div></div>;
};

export default ParticipantList;
