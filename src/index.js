import kll, { k } from "kll";
import Layout from "./modules/Layout/Layout.mjs";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
const socket = io(import.meta.env.SNOWPACK_PUBLIC_API);

socket.on("reload", (msg) => {
  if (msg === true) window.location.reload();
});

const root = document.getElementById("root");
kll.render = [root, k(Layout)];
