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
        messagesEndRef.current?.scrollintoView({behavior: "smooth"})
    }
  }, [messages, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim(){
        onSendMessage(text)
        setText("")
    })
  }

  return <div></div>;
};

export default ChatPanel;
