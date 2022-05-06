import bdd from "../../helpers/bdd.mjs";
import submitButton from "../../helpers/submitButton.mjs";
import today from "../../helpers/today.mjs";
import translator from "../../helpers/translator.mjs";
import { k, l } from "../../kll/index.mjs";
import SubmitButton from "../SubmitButton/SubmitButton.mjs";
import Winners from "../Winners/Winners.mjs";
import classes from "./Form.module.css";

const LS_WIN = "morse_msg" + today();

async function sendResponse() {
  const lang = localStorage.getItem("lang"),
    textArea = document.getElementById("proposal"),
    response = await fetch(import.meta.env.SNOWPACK_PUBLIC_API + "/message", {
      method: "POST",
      body: JSON.stringify({
        msg: textArea.value,
        lang,
      }),
    });
  return await response.text();
}

const Form = {
  state: {
    numTry: 0,
    msg: "",
  },
  onstart: (state) => {
    const winToday = localStorage.getItem(LS_WIN);
    if (winToday) {
      state.msg = winToday;
    }
    if (bdd.get(today())) {
      const { numTry } = bdd.get(today());
      state.numTry = numTry;
    } else {
      bdd.set(today(), { numTry: 0 });
    }
  },
  onSubmit: async (e, state) => {
    e.preventDefault();
    const msgWin = localStorage.getItem(LS_WIN);
    if (msgWin) {
      state.msg = translator("newTomorrow");
      setTimeout(() => {
        state.msg = msgWin;
      }, 2500);
      return;
    }
    const save = bdd.get(today()),
      textArea = document.getElementById("proposal"),
      userValue = textArea.value,
      res = await submitButton(sendResponse);

    if (res === "win") {
      const msg = translator("winMsg") + ": " + userValue;
      save.response = msg;
      state.msg = msg;
      localStorage.setItem(LS_WIN, msg);
    } else {
      state.msg = translator("decoding failed...");
      setTimeout(() => {
        state.msg = "";
      }, 2500);
    }

    state.numTry++;
    save.numTry = state.numTry;
    bdd.set(today(), save);
  },
  view: (state) =>
    l(
      {
        tag: "form",
        classNames: classes.container,
        attrs: { onSubmit: (e) => Form.onSubmit(e, state) },
      },
      [
        l({ tag: "h2" }, translator("Translate the message")),
        l({ classNames: classes.scores }, [
          Winners,
          l(
            { classNames: classes.result },
            `${state.numTry} ${translator("attempt")}${
              state.numTry > 1 ? "s" : ""
            }`
          ),
        ]),
        l({ tag: "textarea", attrs: { rows: 3, id: "proposal" } }, state.msg),
        SubmitButton,
      ]
    ),
};

export default k(Form);
