import {
  receiveMessage,
  sendMessage,
  messageForm,
  messageInput,
  scrollToBottom,
} from "./framework.js";

const socket = io("http://localhost:6829");

socket.on("message", (msg) => {
  receiveMessage(msg);
});

socket.on("new-connection", (msg) => {
  console.log(msg);
});

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messageInput.value;
  if (message.trim().length === 0) return;

  socket.emit("message", message);
  sendMessage(message);
  scrollToBottom();

  messageInput.value = "";
});
