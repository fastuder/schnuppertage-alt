const messageForm = $("#message > form");
const messageInput = $("#message-input");

const chatMessageList = $("#chat-messages > ul");

// -- Neues DOM Element erstellen und bearbeiten
const newMessage = (message) => {
  const messageListItem = $("<li></li>").addClass("chat-message");

  const messageTextElement = $("<span></span>").text(message);
  messageListItem.append(messageTextElement);

  return messageListItem;
};

const receiveMessage = (message) => {
  const newElement = newMessage(message);
  newElement.attr("data-receiver", true);

  chatMessageList.append(newElement);
};

const sendMessage = (message) => {
  const newElement = newMessage(message);
  newElement.attr("data-sender", true);

  chatMessageList.append(newElement);
};

// -- Automatisches Scrollen
// Den Chat automatisch zur neusten Nachricht herunterscrollen
const scrollToBottom = () => {
  chatMessageList.scrollTop(chatMessageList.height());
};

// Verbindung zum Chat Server herstellen.
const socket = io(
  "https://hslu-schnuppertage-chat-socket-l8dci.ondigitalocean.app"
);

// -- Nachricht empfangen
// Auf eine neue Nachricht vom Server warten. Bei einer neuen Nachricht den inneren Teil
// dieses Abschnitts ausführen.
socket.on("message", (msg) => {
  // Nachricht im Chat anzeigen
  receiveMessage(msg);
});

// -- Nachricht senden
// Auf Absenden des Formulars zum Senden einer Nachricht warten. Beim Absenden den inneren Teil
// dieses Abschnitts ausführen
messageForm.submit((e) => {
  e.preventDefault();

  // Nachricht aus dem Eingabefeld auslesen
  const message = messageInput.val();

  // Prüfen, ob die Eingabe gültig ist
  // if (message.trim().length === 0) return;

  // Nachricht an den Server senden
  socket.emit("message", message);

  // Nachricht im Chat anzeigen
  sendMessage(message);

  // Den Chat automatisch zur neusten Nachricht herunterscrollen
  scrollToBottom();

  // Das Eingabefeld der Nachricht leeren
  messageInput.val("");
});
