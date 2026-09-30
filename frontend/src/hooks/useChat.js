import { useState } from "react";
import { dummyInitialChatMessages } from "../assets/asset";

export const useChat = (_roomId, user) => {
  const [messages, setMessages] = useState(dummyInitialChatMessages);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
};
