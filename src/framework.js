export const messageForm = document.querySelector("#message > form");
export const messageInput = document.getElementById("message-input");

const chatMessageList = document.querySelector("#chat-messages > ul");

const newMessage = (message) => {
  const newElement = document.createElement("li");
  newElement.classList.add("chat-message");

  const textSpan = document.createElement("span");
  textSpan.innerText = message;
  newElement.appendChild(textSpan);

  return newElement;
};

export const receiveMessage = (message) => {
  const newElement = newMessage(message);
  newElement.setAttribute("data-receiver", "");
  chatMessageList.appendChild(newElement);
};

export const sendMessage = (message) => {
  const newElement = newMessage(message);
  newElement.setAttribute("data-sender", "");
  chatMessageList.appendChild(newElement);
};

export const scrollToBottom = () => {
  chatMessageList.scroll({
    top: chatMessageList.scrollHeight,
    behavior: "smooth",
  });
};
