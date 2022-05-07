import classes from "./Poster.module.css";
import { l, k } from "kll";
import Signal from "../Signal/Signal.mjs";
import MyButton from "../MyButton/MyButton.mjs";
import PosterResizeTitle from "./PosterResizeTitle.mjs";
import Form from "../Form/Form.mjs";
import Footer from "../Footer/Footer.mjs";
import translator from "../../helpers/translator.mjs";

const Poster = {
  onstart: () => {
    Poster.Button = k(MyButton, Poster.state);
  },
  onmount: (_state, _element) => {
    PosterResizeTitle();
    window.addEventListener("resize", PosterResizeTitle);
  },
  view: () =>
    l({ classNames: classes.container }, [
      l({ tag: "h1", classNames: classes.title, id: "title" }, "morse"),
      Signal,
      Form,
      l({tag:'ul'},[
        l({tag:'li'},translator('The message is broadcast continuously')),
        l({tag:'li'},translator('every day, a message to decode')),
        
        l({tag:'li'},"Début de message : ▄ ▄▄▄ ▄ ▄▄▄"),
        l({tag:'li'},"Fin de message: ▄ ▄▄▄ ▄ ▄▄▄ ▄ ")
      ] ),
      Footer
    ]),
};

export default Poster;
