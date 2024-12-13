// Emojis a serem exibidos
const emojis = ["😂", "❤️", "👍", "🔥", "👏", "😍", "🎉", "🌟", "💪", "🤩"];

// Adiciona um emoji ao mural
function addEmoji(emoji) {
  const container = document.getElementById("emoji-container");
  const emojiElement = document.createElement("div");
  emojiElement.textContent = emoji;
  emojiElement.className = "emoji";

  // Posição horizontal aleatória
  const randomX = Math.random() * 100;
  emojiElement.style.left = `${randomX}%`;

  // Adiciona o emoji ao mural
  container.appendChild(emojiElement);

  // Remove o emoji após a animação
  setTimeout(() => {
    emojiElement.remove();
  }, 5000);
}

// Simula emojis a cada 1 segundo
function simulateEmojis() {
  setInterval(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    addEmoji(randomEmoji);
  }, 1000);
}

// Inicia a simulação
simulateEmojis();
