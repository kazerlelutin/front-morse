import { l } from "kll";
import classes from "./MyButton.module.css";

const MyButton = {
  state: {
    salut: undefined,
    bien: "",
  },
  onstart: async (state) => {
    state.salut = MyButton.props.title;
  },
  clickButton: (state) => {
    const { props } = MyButton;
    console.log(MyButton.props);
    state.salut = props.test;
  },
  view: (state) =>
    l(
      { id: "moi", classNames: classes.container },
      l(
        {
          tag: "button",
          classNames: classes.button,
          attrs: { onClick: () => MyButton.clickButton(state) },
        },
        state.salut
      )
    ),
};

export default MyButton;
