import {k,l} from "kll";
import classes from './Layout.module.css';
import Poster from "../Poster/Poster.mjs";

const Layout = {
  view: (_state) => l({classNames:classes.container}, k(Poster))
};

export default Layout;
