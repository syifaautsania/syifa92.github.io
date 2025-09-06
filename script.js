const message = `To: Ka azka\nThanks for all this,\\ since being your friend tbh i feel a little better than what i experienced after the breakup.\n\nBut if you know.. you can also tell me your problem.\nGive me your bad days, give me your good days, give me yours happy and your sad.\n\nI know it's hard n you cant control your thoughts sometimes, but i'm so proud of the person that you are, right now, in this very second, in this very moment.\n\n-Cipa`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}