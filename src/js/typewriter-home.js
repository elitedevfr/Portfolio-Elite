  
  const texts = ['Writing code, is phenomenal.']
  let currentTextIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;
  let erasingDelay = 50;
  let newTextDelay = 2000;

  const typewriter = document.getElementById('typewriter');

  function type() {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
      typewriter.textContent = currentText.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      typingDelay = erasingDelay;
    } else {
      typewriter.textContent = currentText.substring(0, currentCharIndex + 1);
      currentCharIndex++;
      typingDelay = 100;
    }

    if (!isDeleting && currentCharIndex === currentText.length) {
      isDeleting = true;
      typingDelay = newTextDelay;
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentTextIndex++;
      typingDelay = 500;
      if (currentTextIndex === texts.length) {
        currentTextIndex = 0;
      }
    }

    setTimeout(type, typingDelay);
  }

  type();
  
