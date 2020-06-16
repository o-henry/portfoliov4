import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect(`${process.env.REACT_APP_SOCKET_URL}`);

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useState({
    msg: "",
    nickname: "",
  });

  const { msg, nickname } = inputs;

  useEffect(() => {
    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
    });
  });

  /*
  리액트 상태에서 객체를 수정해야 할 때에는,

    inputs[name] = value;
    이런식으로 직접 수정하면 안됩니다.

  그 대신에, 새로운 객체를 만들어서 새로운 객체에 변화를 주고, 이를 상태로 사용해주어야 합니다.
  */

  const onTextChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onMessageSubmit = () => {
    socket.emit("chat message", { nickname, msg });
    setInputs({
      ...inputs,
      [msg]: "",
    });
  };

  const renderChat = () => {
    console.log("chat", chat);
    return chat.map(({ nickname, msg }: any, idx: any) => {
      return (
        <div key={idx}>
          <span style={{ color: "green" }}>{nickname}: </span>
          <span>{msg}</span>
        </div>
      );
    });
  };

  return (
    <>
      <span>Nickname</span>
      <input name="nickname" onChange={onTextChange} value={nickname} />
      <span>Message</span>
      <input name="msg" onChange={onTextChange} value={msg} />
      <button onClick={onMessageSubmit}>Send</button>
      <div>{renderChat()}</div>
    </>
  );
};

export default Chat;
