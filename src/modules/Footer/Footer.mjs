import translator from "../../helpers/translator.mjs";
import { k, l } from "../../kll/index.mjs";
import About from "../About/About.mjs";
import MorseInfo from "../MorseInfo/MorseInfo.mjs";
import classes from "./Footer.module.css";

const Footer = {
  state: {
    popup: undefined,
  },
  Morse: k(MorseInfo),
  handleClick: (state, type) => {
    const comps = {
      about: About,
      morse:MorseInfo
    };
    state.popup = comps[type];
  },
  view: (state) =>
    l({ classNames: classes.container }, [
      l(
        {
          classNames: classes.item,
          attrs: { onClick: () => Footer.handleClick(state, "morse") },
        },
        translator("The morse code")
      ),
      l(
        {
          classNames: classes.item,
          attrs: { onClick: () => Footer.handleClick(state, "about") },
        },
        translator("about")
      ),
      state.popup
        ? l(
            { classNames: classes.popupContainer },
              l(
                {
                  classNames: classes.popup,
                },
                [
                  l(
                    {
                      classNames: classes.close,
                      attrs: { onClick: () => (state.popup = undefined) },
                    },
                    "X"
                  ),
                  k(state.popup)
                ]
                
              )
          )
        : null,
    ]),
};

export default k(Footer);
