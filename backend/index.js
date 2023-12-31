const express = require("express");
const httpServer = express();
const dialer = require("dialer").Dialer;
const cors = require("cors");
const bodyParser = require("body-parser");
const { Server } = require("socket.io");

require("dotenv").config();

const config = {
  url: process.env.URL,
  login: process.env.LOGIN,
  password: process.env.PASS,
};

dialer.configure(config);

const serverInstance = httpServer.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

const io = new Server(serverInstance);

httpServer.use(bodyParser.json());
httpServer.use(cors());
httpServer.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});
httpServer.get("/", (req, res) => {
  res.send("Hello World!");
});

httpServer.post("/call/", async (req, res) => {
  const number1 = req.body.number;
  const number2 = process.env.MY_NUMBER;
  console.log("Dzwonie", number1, number2);
  try {
    bridge = await dialer.call(number1, number2);
    let oldStatus = null;
    let interval = setInterval(async () => {
      let currentStatus = await bridge.getStatus();
      if (currentStatus !== oldStatus) {
        oldStatus = currentStatus;
        io.emit("status", currentStatus);
      }
      if (
        currentStatus === "ANSWERED" ||
        currentStatus === "FAILED" ||
        currentStatus === "BUSY" ||
        currentStatus === "NO ANSWER"
      ) {
        console.log("stop");
        clearInterval(interval);
      }
    }, 1000);
    res.json({ id: "123", status: bridge.STATUSES.NEW });
  } catch (e) {
    io.emit("status", "WRONG NUMBER");
    res.json({ status: "WRONG NUMBER" });
  }
});

httpServer.get("/status", async (req, res) => {
  let status = await bridge.getStatus();
  res.json({ id: "123", status: status });
});
