import { createRouter, createWebHashHistory } from "vue-router";
import Start from "../views/StartView.vue";
import Ringing from "../views/RingingView.vue";
import Connected from "../views/ConnectedView.vue";
import Answered from "../views/AnsweredView.vue";
import Failed from "../views/failed_views/FailedView.vue";
import Busy from "../views/failed_views/BusyView.vue";
import NoAnswer from "../views/failed_views/NoAnswerView.vue";
import CallHistory from "../views/CallHistoryView.vue";
import WrongNumber from "../views/failed_views/WrongNumberView.vue";

const routes = [
  {
    path: "/",
    name: "start",
    component: Start,
  },
  {
    path: "/ringing",
    name: "ringing",
    component: Ringing,
    props: true,
  },
  {
    path: "/connected",
    name: "connected",
    component: Connected,
  },
  {
    path: "/answered",
    name: "answered",
    component: Answered,
  },
  {
    path: "/failed",
    name: "failed",
    component: Failed,
  },
  {
    path: "/busy",
    name: "busy",
    component: Busy,
  },
  {
    path: "/noanswer",
    name: "noanswer",
    component: NoAnswer,
  },
  {
    path: "/callHistory",
    name: "callHistory",
    component: CallHistory,
  },
  {
    path: "/wrongNumber",
    name: "wrongNumber",
    component: WrongNumber,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const phoneNumber = localStorage.getItem("phoneNumber");
  const isCalling = parseInt(localStorage.getItem("isCalling"));

  if (isCalling && to.name !== "ringing" && to.name !== "connected") {
    next(false);
  }

  if (to.name !== "start" && to.name !== "callHistory" && !phoneNumber) {
    next({ name: "start" });
  } else {
    next();
  }
});

export default router;
