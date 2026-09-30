import { useEffect } from "react";

const ChatPanel = ({
  isOpen,
  onClose,
  messages,
  onSendMessage,
  currentUser,
}) => {
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {}, [messages, isOpen]);

  return <div></div>;
};

export default ChatPanel;
