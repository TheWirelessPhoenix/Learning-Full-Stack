// Shrek - The Interactive Swamp Experience
// Because ogres deserve modern web technology too.

document.addEventListener("DOMContentLoaded", () => {
  // ---- DOM References ----
  const shrekImg = document.getElementById("shrekImg");
  const greeting = document.getElementById("greeting");
  const swampBtn = document.getElementById("swampBtn");
  const spinBtn = document.getElementById("spinBtn");
  const rainbowBtn = document.getElementById("rainbowBtn");
  const resetBtn = document.getElementById("resetBtn");
  const appreciateBtn = document.getElementById("appreciateBtn");
  const clickCount = document.getElementById("clickCount");
  const quoteText = document.getElementById("quoteText");
  const newQuoteBtn = document.getElementById("newQuoteBtn");
  const adjective = document.getElementById("adjective");

  // ---- State ----
  let count = 0;
  let isSpinning = false;
  let isRainbow = false;

  // ---- Shrek Quotes ----
  const shrekQuotes = [
    '"Ogres are like onions. We have layers."',
    '"WHAT ARE YOU DOING IN MY SWAMP?!"',
    '"I\'m like a onion! I have layers! Everybody loves layers!"',
    '"Donkey, I\'ll be right back."',
    '"This is the part where you run away."',
    "\"I'm not a monster. I'm just a ogre.\"",
    '"Better out than in, I always say."',
    "\"That'll do, Donkey. That'll do.\"",
    "\"I'm an ogre! You know what that means? I'm a big, scary, ugly, mean, green, stinky, flatulent, fire-breathing monster!\"",
    '"Ogres don\'t have a happy ever after."',
    "\"I'm not the one with the problem. It's society.\"",
    '"You know what else everybody likes? Parfaits."',
    '"I like that boulder. That is a nice boulder."',
    '"Somebody once told me the world is gonna roll me..." (wait, wrong franchise)',
    '"Do you think maybe he\'s compensating for something?"',
    '"I\'m a delivery boy!"',
    '"Someday, I will repay you. Unless, of course, I cannot find you, or if I forget."',
    "\"I don't care what everyone likes! I'm not a puppet!\"",
    '"I\'m going to go home and have a big, cold glass of... swamp water."',
    "\"It's not easy being green. Wait, that's Kermit.\"",
  ];

  // ---- Shrek Roars (funny text variations) ----
  const shrekRoars = [
    '"WHAT ARE YOU DOING IN MY SWAMP?!"',
    '"RRRROOOOAAARRR!!!"',
    '"GET OUT OF MY SWAMP!!!"',
    '"I WILL SWALLOW YOUR SOUL!!!"',
    '"BEWARE THE OGRE!!!"',
    '"I EAT DONKEYS FOR BREAKFAST!!!"',
    '"THIS IS MY SWAMP!!!"',
    '"I\'M AN OGRE, YOU KNOW WHAT THAT MEANS?!"',
    '"DONKEY, I\'M WARNING YOU!!!"',
    '"I\'M GONNA WHUP YER BUTT!!!"',
  ];

  // ---- Functions ----

  // Shrek Roar
  function shrekRoar() {
    const randomRoar =
      shrekRoars[Math.floor(Math.random() * shrekRoars.length)];
    greeting.textContent = randomRoar;
    greeting.classList.remove("roar");
    // Force reflow to restart animation
    void greeting.offsetWidth;
    greeting.classList.add("roar");

    // Shake the image
    shrekImg.style.transform = "rotate(-5deg) scale(1.05)";
    setTimeout(() => {
      shrekImg.style.transform = "rotate(5deg) scale(1.05)";
    }, 100);
    setTimeout(() => {
      shrekImg.style.transform = "rotate(-3deg) scale(1.02)";
    }, 200);
    setTimeout(() => {
      shrekImg.style.transform = "rotate(0deg) scale(1)";
    }, 300);

    // Remove roar class after animation
    setTimeout(() => {
      greeting.classList.remove("roar");
    }, 500);
    document.getElementById("RoarSound").play();
  }

  // Toggle Spin
  function toggleSpin() {
    isSpinning = !isSpinning;
    if (isSpinning) {
      shrekImg.classList.add("spinning");
      spinBtn.textContent = "⏹ Stop Spinning Shrek";
    } else {
      shrekImg.classList.remove("spinning");
      spinBtn.textContent = "🔄 Spin Shrek";
    }
  }

  // Toggle Rainbow
  function toggleRainbow() {
    isRainbow = !isRainbow;
    if (isRainbow) {
      shrekImg.classList.add("rainbow");
      rainbowBtn.textContent = "⏹ Stop Rainbow Shrek";
    } else {
      shrekImg.classList.remove("rainbow");
      rainbowBtn.textContent = "🌈 Rainbow Shrek";
    }
  }

  // Reset Shrek
  function resetShrek() {
    // Remove all effects
    isSpinning = false;
    isRainbow = false;
    shrekImg.classList.remove("spinning", "rainbow");
    shrekImg.style.transform = "";
    spinBtn.textContent = "🔄 Spin Shrek";
    rainbowBtn.textContent = "🌈 Rainbow Shrek";
    greeting.textContent = '"WHAT ARE YOU DOING IN MY SWAMP?!"';
    greeting.classList.remove("roar");
    adjective.textContent = "layers";
    adjective.style.color = "#7ccd7c";
  }

  // Appreciate Shrek
  function appreciateShrek() {
    count++;
    clickCount.textContent = count;

    // Fun reactions based on count
    if (count === 1) {
      clickCount.style.color = "#7ccd7c";
    } else if (count === 5) {
      clickCount.style.color = "#ffd700";
      alert("🌟 You have truly discovered the greatness of Shrek! 🌟");
    } else if (count === 10) {
      clickCount.style.color = "#ff6b6b";
      alert(
        "🔥 10 TIMES?! Shrek is flattered. He might even let you visit the swamp.",
      );
    } else if (count === 20) {
      clickCount.style.color = "#ff00ff";
      alert(
        "💚 20 APPRECIATIONS?! You are officially Shrek's #1 fan. Welcome to the swamp family.",
      );
    } else if (count === 50) {
      clickCount.style.color = "#00ffff";
      alert(
        "🏆 50 TIMES?! You have achieved CHAMPION OF THE SWAMP status. Shrek bows to you.",
      );
    }

    // Change the adjective every 3 clicks
    const adjectives = [
      "layers",
      "onions",
      "swamp",
      "ogre",
      "donkey",
      "parfait",
      "boulder",
      "fiona",
      "gingy",
      "puss",
    ];
    if (count % 3 === 0) {
      const adjIndex = Math.floor(count / 3) % adjectives.length;
      adjective.textContent = adjectives[adjIndex];
      // Random color
      const colors = [
        "#7ccd7c",
        "#ffd700",
        "#ff6b6b",
        "#87ceeb",
        "#dda0dd",
        "#ffa07a",
      ];
      adjective.style.color = colors[Math.floor(Math.random() * colors.length)];
    }
  }

  // New Quote
  function newQuote() {
    const randomQuote =
      shrekQuotes[Math.floor(Math.random() * shrekQuotes.length)];
    quoteText.textContent = randomQuote;
    // Animate
    quoteText.style.transform = "scale(0.8)";
    quoteText.style.opacity = "0";
    setTimeout(() => {
      quoteText.style.transform = "scale(1)";
      quoteText.style.opacity = "1";
    }, 50);
  }

  // Click image to roar
  shrekImg.addEventListener("click", shrekRoar);

  // ---- Event Listeners ----
  swampBtn.addEventListener("click", shrekRoar);
  spinBtn.addEventListener("click", toggleSpin);
  rainbowBtn.addEventListener("click", toggleRainbow);
  resetBtn.addEventListener("click", resetShrek);
  appreciateBtn.addEventListener("click", appreciateShrek);
  newQuoteBtn.addEventListener("click", newQuote);

  // ---- Easter Egg: Konami Code ----
  let konamiIndex = 0;
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  document.addEventListener("keydown", (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === konamiCode.length) {
        // Activate ALL effects!
        isSpinning = true;
        isRainbow = true;
        shrekImg.classList.add("spinning", "rainbow");
        spinBtn.textContent = "⏹ Stop Spinning Shrek";
        rainbowBtn.textContent = "⏹ Stop Rainbow Shrek";
        greeting.textContent = '"🕺 SHREK HAS ASCENDED 🕺"';
        greeting.classList.add("roar");
        document.body.style.background =
          "linear-gradient(135deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #8b00ff)";
        document.body.style.animation = "rainbowFilter 0.5s linear infinite";
        alert("🕺 KONAMI CODE ACTIVATED! SHREK HAS ACHIEVED ENLIGHTENMENT! 🕺");
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });

  console.log(
    "%c🧅 SHREK HAS BEEN LOADED 🧅",
    "font-size: 24px; font-weight: bold; color: #7ccd7c; text-shadow: 2px 2px 0 #1a3a1a;",
  );
  console.log(
    "%cTry the Konami Code for a surprise! (↑↑↓↓←→←→BA)",
    "font-size: 14px; color: #c4a882;",
  );
});
