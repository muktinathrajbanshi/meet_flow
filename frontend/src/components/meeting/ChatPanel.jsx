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

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollintoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText("");
    }
  };

  if (!isOpen) return null;

  return (
    <aside
      className="w-full sm:w-80 h-full bg-white border-l border-slate-200 flex 
    flex-col z-30 shadow-2xl animate-in slide-in-from-right duration-200"
    ></aside>
  );
};

export default ChatPanel;
