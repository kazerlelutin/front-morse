import translator from "../../helpers/translator.mjs";
import { k, l } from "../../kll/index.mjs";

const SubmitButton = {
  view: () =>
    l(
      { classNames: 'container__button', id: "container_submit_button" },
      l(
        {
          tag: "button",
          classNames: 'button_valid',
          id: "submit_button",
        },
        translator("Send")
      )
    ),
};

export default k(SubmitButton);
