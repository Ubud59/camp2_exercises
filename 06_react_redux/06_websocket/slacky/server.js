const express = require("express");
const WebSocket = require("ws");
const server = require("http").createServer();
const path = require("path");
const app = express();

const messages = [];
let nbUsers = 0;

app.use(express.static(path.join(__dirname, "/views")));

const wss = new WebSocket.Server({server});

wss.on("connection", function connection(ws, req) {
  ws.on("message", function incoming(data) {
    const message = JSON.parse(data);
    switch (message.type) {
    case "LOGIN":
      nbUsers = nbUsers + 1;
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "MESSAGES", data: messages, nb: nbUsers}));
        }
      });
      return;
    case "NEW_MESSAGE":
      // Add the message to the list of messages
      messages.push({ userName: message.userName, message: message.message});

      // Sends all messages to all connected clients
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: "MESSAGES", data: messages , nb: nbUsers}));
        }
      });
      return;
    }
  });

  // Display an error when one occurs
  // The most likely candidate is when a browser closes without closing
  // the connection properly
  ws.on("error", console.warn);
});

server.on("request", app);
server.listen(8080, () => console.log("Server listening on 8080"));
