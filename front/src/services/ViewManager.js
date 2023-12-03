import router from "../router";
import io from "socket.io-client";

class ViewManager {
  constructor() {
    this.status = null;
    this.callStart = null;
    this.callEnd = null;
  }
  changeView() {
    switch (this.status) {
      case "CONNECTED":
        router.push({ name: "connected" });
        break;
      case "FAILED":
        router.push({ name: "failed" });
        break;
      case "ANSWERED":
        router.push({ name: "answered" });
        break;
      case "RINGING":
        router.push({ name: "ringing" });
        break;
      case "BUSY":
        router.push({ name: "busy" });
        break;
      case "NO ANSWER":
        router.push({ name: "noanswer" });
        break;
      case "WRONG NUMBER":
        router.push({ name: "wrongNumber" });
        break;
    }
  }
  checkStatus() {
    const socket = io(process.env.VUE_APP_URL, {
      reconnection: false,
      transports: ["websocket", "polling"],
    });
    socket.on("status", (status) => {
      if (status !== this.status) {
        this.status = status;
        this.changeView();
      }
      if (status === "RINGING") {
        localStorage.setItem("isCalling", 1);
      }
      if (status === "NO ANSWER" || status === "FAILED" || status === "BUSY") {
        localStorage.setItem("isCalling", 0);
      }
      if (status === "CONNECTED") {
        this.callStart = Date.now();
      }
      if (status === "ANSWERED") {
        this.endCall();
      }
    });
  }
  // Metoda endCall, która zapisuje czas trwania połączenia w localStorage
  endCall() {
    this.callEnd = Date.now();
    this.callDuration = Math.round((this.callEnd - this.callStart) / 1000);
    localStorage.setItem("callDuration", this.callDuration);
    localStorage.setItem("isCalling", 0);
  }
}

export default new ViewManager();
