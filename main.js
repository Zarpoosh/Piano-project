const PianoKeys = document.querySelectorAll(".piano-keys .key");

let audio = new Audio("./audio/1558418994_noty-do.mp3");

const PlayTune = (key) => {
  audio.src = `tunes/${key}.mp3`;
  audio.play();
  const clickedKey=document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
};

PianoKeys.forEach((key) => {
  key.addEventListener("click", () => PlayTune(key.dataset.key));
  //   console.log(key.dataset.key);
});

const pressedKey = (e) => {
//   console.log(e);
PlayTune(e.key)
};
document.addEventListener("keypress", pressedKey);
