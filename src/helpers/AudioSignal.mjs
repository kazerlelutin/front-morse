export default function AudioSignal(disabled) {
  const sound = document.getElementById("morse_sound");

  console.log(sound)
  if (disabled) {
        
   sound.pause();
  } else {
  sound.play();
  }
}
