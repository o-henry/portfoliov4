import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

const Chat = () => {
  const [chat, setChat] = useState<any>([]);
  const [inputs, setInputs] = useState({
    msg: "",
    nickname: "",
  });

  // const [msg, setMsg] = useState("");
  // const [nickname, setNickname] = useState("");

  const { msg, nickname } = inputs;

  useEffect(() => {
    socket.on("chat message", ({ nickname, msg }: any) => {
      setChat([...chat, { nickname, msg }]);
    });
  });

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

// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// const Chat = () => {
//   const [state, setState] = useState<any | undefined>({ msg: "", chat: [] });
//   //   const [msg, setMsg] = useState("");
//   const socket = io.connect("http://localhost:8000");

//   useEffect(() => {
//     socket.on("chat message", ({ id, msg }: any) => {
//       setState({ chat: [...state.chat, { id, msg }] });
//     });
//   }, [state.chat]);

//   const onTextChange = (e: any) => {
//     setState({ msg: e.target.value });
//     // setMsg(e.target.value);
//   };

//   const onMessageSubmit = () => {
//     socket.emit("chat message", state.msg);
//     setState({ msg: "" });
//   };

//   const renderChat = () => {
//     const { chat } = state;
//     console.log("avvava", state, state.chat);
//     return Array.isArray(chat) && chat.length !== 0
//       ? chat.map(({ id, msg }: any, idx: any) => {
//           return (
//             <div key={idx}>
//               <span style={{ color: "green" }}>{id}: </span>
//               <span>{msg}</span>
//             </div>
//           );
//         })
//       : "";
//   };

//   return (
//     <>
//       <input onChange={onTextChange} value={state.msg} />
//       <button onClick={onMessageSubmit}>Send</button>
//       <div>{renderChat()}</div>
//     </>
//   );
// };

// export default Chat;
