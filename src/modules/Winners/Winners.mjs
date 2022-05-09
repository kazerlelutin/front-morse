import { k, l } from "../../kll/index.mjs";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import translator from "../../helpers/translator.mjs";
const socket = io(import.meta.env.SNOWPACK_PUBLIC_API);

const Winners = {
  state: {
    winners: 0,
  },
  onstart: async (state) => {
    const res = await fetch(import.meta.env.SNOWPACK_PUBLIC_API + "/winner");
    state.winners = parseInt(await res.text()) || 0;

    socket.on("classment", (msg) => {
      state.winners = msg;
    });
    return true;
  },
  view: (state) =>
    l(
      {},
      `${state.winners} ${translator("winner")}${state.winners > 1 ? "s" : ""}`
    ),
};

export default k(Winners);
