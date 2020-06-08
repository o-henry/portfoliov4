import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:8000");

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<any>([]);

  useEffect(() => {
    socket.on("chat message", ({ id, msg }: any) => {
      console.log(id);
      setChat([...chat, { id, msg }]);
    });
  });

  const onTextChange = (e: any) => {
    setMsg(e.target.value);
  };

  const onMessageSubmit = () => {
    socket.emit("chat message", { msg });
    setMsg("");
  };

  const renderChat = () => {
    console.log("chat", chat);
    return chat.map(({ id, msg }: any, idx: any) => {
      return (
        <div key={idx}>
          <span style={{ color: "green" }}>
            <h1>{id}: </h1>
          </span>
          <span>{msg}:</span>
        </div>
      );
    });
  };

  return (
    <>
      <input onChange={onTextChange} value={msg} />
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
