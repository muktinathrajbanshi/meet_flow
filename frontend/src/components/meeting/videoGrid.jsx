const videoGrid = ({
  localStream,
  localUser,
  remoteUsers,
  audioEnabled,
  videoEnabled,
}) => {
  const totalParticipants = 1 + remoteUsers.length;

  // Determine grid columns dynamically
  const getGridClass = () => {
    if (totalParticipants === 1) return "grid-cols-1 max-w-4xl";
    if (totalParticipants === 1) return "grid-cols-1 md:grid-cols-2 max-w-5xl";
    if (totalParticipants <= 4) return "grid-cols-1 md:grid-cols-2 max-w-5xl";
    if (totalParticipants === 1) return "grid-cols-1 max-w-4xl";
  };

  return <div></div>;
};

export default videoGrid;
