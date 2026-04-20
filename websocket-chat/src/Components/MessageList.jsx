function MessageList({ messages }) {
  const currentUser = localStorage.getItem("username");

  return (
    <div className="messages">
      {messages.map((msg, i) => (
        <div
          key={i}
          className="message"
          style={{
            alignSelf:
              msg.sender === currentUser ? "flex-end" : "flex-start",
            background:
              msg.sender === currentUser ? "#0084ff" : "#dcf8c6",
            color:
              msg.sender === currentUser ? "white" : "black",
          }}
        >
          <b>{msg.sender}</b>
          <div>{msg.content}</div>
        </div>
      ))}
    </div>
  );
}

export default MessageList;