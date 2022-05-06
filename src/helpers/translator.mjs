import lang from "../data/lang.mjs";

export default function translator(txt) {
  const ls = localStorage.getItem("lang");
  if (!ls) {
    // Chrome render en-EN, firefox en
    const lang = navigator.language.slice(0, 2).toLowerCase();
    localStorage.setItem("lang", lang);
    return lang[txt] ? lang[txt][lang] : txt;
  } else {
    return lang[txt] ? lang[txt][ls] : txt;
  }
}
