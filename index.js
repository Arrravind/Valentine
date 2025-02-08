const messages = [
    "Yennn ngaaa?",
    "Kandippaa venamaaa 🙃?",
    "Nejamaaaa?????? 🙂",
    "Pleechhhhh ngaaa ",
    "Nalllaaa yosingaaaaa",
    "Venam nu sonna, naan kochipennn",
    "Romba romba kochipennn",
    "Avlo dhan kochikittennn 🙁",
    "Pongaaaa idhuku mela keka maatennn",
    "Summaaa dhan nga sonnen, okay sollidungaaa!!❤️"
];

let messageIndex = 0;
let noButtonClickCount = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
    
    noButtonClickCount++;
    if (noButtonClickCount > messages.length) {
        makeNoButtonMovable(noButton);
    }
}

function handleYesClick() {
    window.location.href = "./yes.html";
}

function makeNoButtonMovable(button) {
    button.textContent = 'Vera Vazhi Illa nga 😁'
    button.addEventListener("mouseenter", function () {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        button.style.position = "absolute";
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
}
