import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./Messages.css";

import Message from "../Message";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, i) => (
        <Message message={message} name={name} key={i} />
      ))}
    </ScrollToBottom>
  );
};

export default Messages;
