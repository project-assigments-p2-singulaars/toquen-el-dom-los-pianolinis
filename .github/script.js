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

//cangrejo

document.addEventListener("DOMContentLoaded", function () {
  let linkStart = document.getElementById("link-start");
  let crabIcon = document.querySelector(".crab-icon");

  // Agregar evento de clic al enlace "¿Empezamos?"
  linkStart.addEventListener("click", function (event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    setTimeout(() => {
      let audio2 = new Audio("./audio/bajo-el-mar.mp3");
      audio2.play();
    }, 1500);

    let audio = new Audio("./audio/bubbles.mp3");
    

    audio.play();

    // Obtener la distancia hasta la sección #second-section
    let targetSection = document.querySelector("#second-section");
    let targetOffset = targetSection.offsetTop;

    // Desplazamiento suave hacia la sección #second-section
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth",
    });

    // Mostrar el ícono del cangrejo cambiando su estilo de visualización a "block" después del desplazamiento
    setTimeout(function () {
      crabIcon.style.display = "block";
    }, 100); // Puedes ajustar el tiempo de espera según lo desees
  });
});


function createListenerMenu() {
  const menuButton = document.getElementById("burguer-icon")
  const menuElement = document.getElementById("burguer-menu-container")
  const menuElementMobile = document.querySelector(".menu-mobile")
  const closeMenu = document.querySelector('#logo-close-menu')
  
  menuButton.addEventListener("click", () => {
    // menuElement.classList.add("menu-mobile");
    menuElementMobile.classList.toggle('show');
    console.log("FUNCIONA SUUUUUuuu");
  }
  )
  closeMenu.addEventListener('click', ()=>{
    menuElement.classList.toggle('hide');
    menuElementMobile.classList.remove('show');
  })
}

createListenerMenu();