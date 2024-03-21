const LIGHTKEYS = ["a", "s", "d", "f", "g", "h", "j"];
const DARKKEYS = ["w", "e", "t", "y", "u"];

const notes = document.querySelectorAll(".key");
const lightKeys = document.querySelectorAll(".key.light");
const darkKeys = document.querySelectorAll(".key.dark");

notes.forEach((note) => {
  note.addEventListener("click", () => playNote(note));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const lightKeyIndex = LIGHTKEYS.indexOf(key);
  const darkKeysIndex = DARKKEYS.indexOf(key);

  if (lightKeyIndex > -1) playNote(lightKeys[lightKeyIndex]);
  if (darkKeysIndex > -1) playNote(darkKeys[darkKeysIndex]);
});

function playNote(key) {
  const audio = document.getElementById(key.dataset.note);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("active");
  setTimeout(() => {
    key.classList.remove("active");
  }, 100);
}
