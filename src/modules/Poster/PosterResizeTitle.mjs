export default function PosterResizeTitle() {

  const title = document.getElementById("title"),
    hPos = title.offsetWidth / 2;
  title.style.top = -title.offsetHeight / 2 + "px";
  title.style.left = hPos + "px";
  title.style.right = hPos + "px";
}
