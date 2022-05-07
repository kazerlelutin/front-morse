export default function AudioSignal(disabled) {
  const sound = document.getElementById("morse_sound");
  if (disabled) {
    sound.pause();
  } else {
    sound.volume = 0.4;
    sound.play();
  }
}
