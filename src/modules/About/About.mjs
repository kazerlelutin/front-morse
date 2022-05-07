import translator from "../../helpers/translator.mjs";
import { l } from "../../kll/index.mjs";

const About = {

    view:()=>(
        l({ classNames: "flex-col" }, [
            l({ tag: "h2" }, translator("about")),
            l({ tag: "h3" }, translator("hosting")),
            l({ }, translator("hostingDetail")),
            l({ tag: "h3" }, translator("owner")),
            l({ }, translator("ownerDetail")),
            l(
                {
                  tag: "a",
                  attrs: { target: "_blank", href: 'https://linktr.ee/kazerlelutin' },
                },
                translator('contact me')
            ),
            l({ tag: "h3" }, translator("Sources")),
            l({tag:'ul'},[
                l({tag:'li'},l(
                    {
                      tag: "a",
                      attrs: { target: "_blank", href: 'https://github.com/kazerlelutin/front-morse/' },
                    },
                    translator('front-end')
                )),
                l({tag:'li'},l(
                    {
                      tag: "a",
                      attrs: { target: "_blank", href: 'https://github.com/kazerlelutin/back-morse/' },
                    },
                    translator('back-end')
                ))
            ])
          ])
    )
}

export default About;