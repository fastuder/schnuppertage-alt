// Ignorieren, das sind einige Helfer, welche das Ganze etwas einfacher machen
import {
  receiveMessage,
  sendMessage,
  messageForm,
  messageInput,
  scrollToBottom,
} from "./framework.js";

// Verbindung zum Chat Server herstellen.
const socket = io(
  "http://hslu-schnuppertage-chat-socket-l8dci.ondigitalocean.app:443"
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
messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Nachricht aus dem Eingabefeld auslesen
  const message = messageInput.value;

  // Prüfen, ob die Eingabe gültig ist
  if (message.trim().length === 0) return;

  // Nachricht an den Server senden
  socket.emit("message", message);

  // Nachricht im Chat anzeigen
  sendMessage(message);

  // Den Chat automatisch zur neusten Nachricht herunterscrollen
  scrollToBottom();

  // Das Eingabefeld der Nachricht leeren
  messageInput.value = "";
});
