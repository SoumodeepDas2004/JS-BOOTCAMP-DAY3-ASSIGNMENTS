const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Soumodeep", "Ananya"];
let currentIndex = 0;
const nameDisplay = document.getElementById('nameDisplay');

function showName(index) {
    nameDisplay.textContent = names[index];
}

function showPrevious() {
    currentIndex = (currentIndex - 1 + names.length) % names.length;
    showName(currentIndex);
}

function showNext() {
    currentIndex = (currentIndex + 1) % names.length;
    showName(currentIndex);
}
// Initial display
showName(currentIndex);