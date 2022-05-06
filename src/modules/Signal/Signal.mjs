import { l } from "kll";
import classes from "./Signal.module.css";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import translator from "../../helpers/translator.mjs";
const socket = io(import.meta.env.SNOWPACK_PUBLIC_API);

const Signal = {
  onstart: ()=>{
    socket.on(translator('signal_en'), (msg) => {
      // don't use state for no recreate DOM.
      const container = document.getElementById("signal");
      container.setAttribute("data-light", msg);
    });
  },
  view: () =>
    l({ classNames: classes.container }, [
      l({ classNames: classes.signal, id: "signal" }),
    ]),
};

export default Signal;
