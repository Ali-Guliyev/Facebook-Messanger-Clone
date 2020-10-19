import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  const clearTheChat = () => {
    alert("it's not working (-_-)");
  };

  return (
    <div className="App">
      <img
        src="https://i.pcmag.com/imagery/reviews/07lQpWrUp49vFYcx0FC95Qf-7.1569478379.fit_scale.size_1028x578.png"
        alt=""
        width="160px"
        height="100px"
      />
      <h2>
        Welcome <u>{(username && username) || "Unknown User"}</u> to Facebook
        Messanger Clone!
      </h2>
      <Button onClick={clearTheChat} variant="contained" color="secondary">
        Clear Chat
      </Button>

      <form className="app__form" onSubmit={sendMessage}>
        <div className="app__formControl">
          <Input
            className="input app__input"
            placeholder="Enter a message..."
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            vriant="contained"
            color="primary"
            type="submit"
          >
            <SendIcon />
          </IconButton>
        </div>
      </form>

      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
