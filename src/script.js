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

// -- Empfangene Nachricht anzeigen
const receiveMessage = (message) => {
  const newElement = newMessage(message);
  newElement.attr("data-receiver", true);

  chatMessageList.append(newElement);
};

// -- Gesendete Nachricht anzeigen
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
/**
  Aufgabe 2.3: Schreibe hier deinen Code hin!
*/

// -- Nachricht empfangen
// Auf eine neue Nachricht vom Server warten. Bei einer neuen Nachricht den inneren Teil
// dieses Abschnitts ausführen.
/**
  Aufgabe 2.4: Schreibe hier deinen Code hin!
*/

// -- Nachricht senden
// Auf Absenden des Formulars zum Senden einer Nachricht warten. Beim Absenden den inneren Teil
// dieses Abschnitts ausführen
messageForm.submit((e) => {
  e.preventDefault();

  /**
    Aufgabe 2.5: Schreibe hier deinen Code hin!
  */
});
