import { l,k } from "kll";
import classes from "./Signal.module.css";
import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";
import translator from "../../helpers/translator.mjs";
import AudioSignal from "../../helpers/AudioSignal.mjs";
const socket = io(import.meta.env.SNOWPACK_PUBLIC_API);

const Signal = {
  state: {
    muted: true
  },
  onstart: ()=>{
    const sound = document.getElementById("morse_sound");
    sound.muted = !sound.muted;
    socket.on(translator('signal_en'), (msg) => {
      // don't use state for no recreate DOM.
      const container = document.getElementById("signal");
      container.setAttribute("data-light", msg);
      AudioSignal(msg === '.' ? true:false)
    });
  },
  handleClick:(state)=>{
    const sound = document.getElementById("morse_sound");
    sound.muted = !sound.muted;
    state.muted= sound.muted;

  },
  view: (state) =>
    l({ classNames: classes.container, attrs: {onClick: ()=>Signal.handleClick(state), title: translator('clic for disabled/enabled sound')} }, [
      l({ classNames: classes.signal, id: "signal" },
      l({tag:'img',attrs:{src:state.muted ? '/sono-d.svg':'/sono.svg'}})
      )
    ]),
};

export default k(Signal);
