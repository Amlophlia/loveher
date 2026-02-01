// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// 💌 OPEN ENVELOPE
envelope.addEventListener("click", () => {
  envelope.style.opacity = "0";
  envelope.style.transform = "scale(0.8)";

  setTimeout(() => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      letterWindow.classList.add("open");
    }, 50);
  }, 300);
});

// 🏃 NO BUTTON RUNS AWAY (better movement)
noBtn.addEventListener("mouseover", () => {
  const range = 250;
  const x = Math.random() * range - range / 2;
  const y = Math.random() * range - range / 2;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// 💪 YES BUTTON GROWS WHEN NO CLICKED
let yesScale = 1;

noBtn.addEventListener("click", () => {
  yesScale += 0.3;
  yesBtn.style.transform = `scale(${yesScale})`;
});

// 🎉 YES CLICKED — FINAL MODE
yesBtn.addEventListener("click", () => {
  title.textContent = "YIPPEEEE SHE SAID YES 💖";
  catImg.src = "cat_dance.gif";

  letterWindow.classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";

  launchConfetti();
});

// 🎊 CONFETTI FUNCTION
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.background = `hsl(${Math.random() * 360},100%,50%)`;
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}
