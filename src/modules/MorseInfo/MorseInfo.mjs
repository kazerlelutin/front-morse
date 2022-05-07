import translator from "../../helpers/translator.mjs";
import { k, l } from "../../kll/index.mjs";

const MorseInfo = {
  view: () =>
    l({ classNames: "flex-col" }, [
      l({ tag: "h2" }, translator("The Morse code")),
      l({}, translator("infoMorse")),
      l({ tag: "ul" }, [
        l(
          { tag: "li" },
          l(
            {
              tag: "a",
              attrs: { target: "_blank", href: translator('wikipediaMorse') },
            },
            "Wikipedia"
          )
        ),
        l(
            { tag: "li" },
            l(
              {
                tag: "a",
                attrs: { target: "_blank", href: "https://morsedecoder.com" },
              },
              "Morse decoder"
            )
          ),
      ]),
    ]),
};

export default MorseInfo;
