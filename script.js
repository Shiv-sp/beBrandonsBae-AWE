const consentWords = [
    "agree", "grant", "allow", "given", "yield", 
    "block", "guard", "voice", "speak", "alert", 
    "state", "check", "trust", "power", "right"
  ];
  
  const wordDefinitions = {
    "agree": "Freely choosing to participate with respect and mutual understanding.",
    "grant": "Offering permission with trust and care for others' autonomy.",
    "allow": "Creating space for others to make choices while maintaining respect for boundaries.",
    "given": "The empowering act of giving permission or consent willingly and confidently.",
    "yield": "Opening up to mutual respect and understanding, without compromising personal values.",
    "block": "Setting healthy boundaries to protect your peace and well-being.",
    "guard": "Protecting your energy, values, and sense of self with love and care.",
    "voice": "Sharing your thoughts and boundaries authentically and confidently.",
    "speak": "Clearly expressing your desires, boundaries, and limits with kindness and self-respect.",
    "alert": "Being attuned to your own feelings and others' cues, fostering mutual respect.",
    "state": "Articulating your needs and boundaries with clarity, confidence, and love.",
    "check": "Ensuring mutual understanding and consent through open communication.",
    "trust": "Building a foundation of safety and care, where both parties feel valued and respected.",
    "power": "Embracing your ability to make choices and take control of your well-being and happiness.",
    "right": "Honoring your right to make decisions about your body, heart, and mind with self-respect."
  };
  
  let word = consentWords[Math.floor(Math.random() * consentWords.length)].toUpperCase();
  let attempts = [];
  const maxAttempts = 6;
  
  const grid = document.getElementById("grid");
  const input = document.getElementById("input");
  const submitBtn = document.getElementById("submitBtn");
  const info = document.getElementById("info");
  
  function renderGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < maxAttempts; i++) {
      for (let j = 0; j < 5; j++) {
        const cell = document.createElement('div');
        const attempt = attempts[i] || '';
        const letter = attempt[j] || '';
        const isCorrect = letter === word[j];
        const isPresent = !isCorrect && word.includes(letter);
        
        // Set background color based on the letter status
        if (letter) {
          if (isCorrect) cell.style.backgroundColor = '#538D4E'; // Green
          else if (isPresent) cell.style.backgroundColor = '#B59F3B'; // Orange
          else cell.style.backgroundColor = '#3A3A3C'; // Gray
        } else {
          cell.style.backgroundColor = 'white'; // Empty
        }
  
        // Set text color to white for readability
        cell.style.color = 'white';
        cell.textContent = letter;
        grid.appendChild(cell);
      }
    }
  }
  
  submitBtn.addEventListener('click', () => {
    if (attempts.length >= maxAttempts) {
      alert("Game over! Refresh to try again.");
      return;
    }
    
    const guess = input.value.toUpperCase();
    if (guess.length !== 5) {
      alert("Enter a 5-letter word!");
      return;
    }
  
    attempts.push(guess);
    input.value = '';
  
    if (guess === word) {
      info.textContent = `💖 Congratulations! "${word}" means: ${wordDefinitions[word.toLowerCase()]}`;
    } else if (attempts.length === maxAttempts) {
      info.textContent = `💌 The correct word was "${word}". It means: ${wordDefinitions[word.toLowerCase()]}`;
    }
  
    renderGrid();
  });
  
  renderGrid();
  