import translator from "../../helpers/translator.mjs";
import { k, l } from "../../kll/index.mjs";
import classes from "./Footer.module.css";

const Footer = {
  state: {
    popup: undefined,
  },
  handleClick: (state, type) => {
    const comps = {
      about: "comp about",
    };
    state.popup = "dodo";
  },
  view: (state) =>
    l({ classNames: classes.container }, [
      l(
        {
          classNames: classes.item,
          attrs: { onClick: () => Footer.handleClick(state, "code") },
        },
        translator("The morse code")
      ),
      l(
        {
          classNames: classes.item,
          attrs: { onClick: () => Footer.handleClick(state, "code") },
        },
        translator("About")
      ),
      l(
        {
          classNames: classes.item,
          attrs: { onClick: () => Footer.handleClick(state, "code") },
        },
        translator("About")
      ),
      state.popup
        ? l(
            { classNames: classes.popupContainer },
            l(
              {
                classNames: classes.popup,
                attrs: { onClick: () => (state.popup = undefined) },
              },
              "en cours (clic pour fermer)"
            )
          )
        : null,
    ]),
};

export default k(Footer);
