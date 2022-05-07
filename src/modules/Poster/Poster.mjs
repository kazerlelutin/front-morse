import classes from "./Poster.module.css";
import { l, k } from "kll";
import Signal from "../Signal/Signal.mjs";
import MyButton from "../MyButton/MyButton.mjs";
import PosterResizeTitle from "./PosterResizeTitle.mjs";
import Form from "../Form/Form.mjs";

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
      k(Signal),
      Form,
      l({tag:'ul'},[
        l({tag:'li'},"N'oubliez pas la ponctuation"),
        l({tag:'li'},"Début de message : ▄ ▄▄▄ ▄ ▄▄▄"),
        l({tag:'li'},"Fin de message: ▄ ▄▄▄ ▄ ▄▄▄ ▄ ")
      ] ),
    ]),
};

export default Poster;
