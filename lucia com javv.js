const word = "Lucia";
let currentIndex = 0;

const letterDisplay = document.getElementById('letter-display');

// Actualiza la letra mostrada según el índice actual
function updateLetter() {
    letterDisplay.textContent = word[currentIndex];
}

// Detecta el click derecho y avanza a la siguiente letra
document.addEventListener('contextmenu', (event) => {
    event.preventDefault(); // Evita el menú contextual predeterminado
    if (currentIndex < word.length - 1) {
        currentIndex++;
        updateLetter();
    }
});

// Detecta el click izquierdo y retrocede a la letra anterior
document.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateLetter();
    }
});
