// Floating hearts animation
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 4) + "s";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Run hearts on interval
setInterval(createHeart, 500);

// Typewriter effect for multiline message
const messageLines = [
  "Reyuuu i want you to know that you",
  " mean everything to me ",
  "and that you are very veryyy ",
  "veryyy important to me.",
  "You are my happiness, my comfort",
  "my sunshine, my warmth, my calm ",
  "you make me feel so loved ",
"and cared for.",
"Im so grateful for that ",
"and i can't thank you enough. ",
"Thank you for being my cutu baby ",
"my perfect girlfriend, my love,",
"my goofy baby, my sweetheart,",
"my home, my catwoman,",
" my gorgeous ladyy, ",
"my favorite notification,",
" my jaanu, my angry lil angel,",
" my prettiest princess,	",
"my reyuuu",
"Thank u for putting up with me ",
"and my tantrums and ",
"the days that im ",
"just really annoying ",
"and sometimes when ",
"i stretch things too far",
"and annoy you for hours",
 "Thank u for making me feel so",
 "loved and cared for.",
"i've never loved anyone like you.",
"i would do anything to see you smile",
"I love you my babyyy❤️"
];

const typeText = document.getElementById("typeText");
let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (lineIndex < messageLines.length) {
    if (charIndex < messageLines[lineIndex].length) {
      typeText.innerHTML += messageLines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 50); // typing speed
    } else {
      typeText.innerHTML += "<br>"; // move to next line
      lineIndex++;
      charIndex = 0;
      setTimeout(typeWriter, 400); // delay between lines
    }
  }
}

// Start after DOM loads
window.addEventListener("DOMContentLoaded", () => {
  typeWriter();
});
