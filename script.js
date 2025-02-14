// const messages = [
//     "Are you sure?",
//     "Really sure??",
//     "Think twice, my dear!",
//     "Pretty please with a cherry on top!",
//     "Take a moment to reconsider!",
//     "If you say no, my heart might break... 💔",
//     "This is making me tear up... 😢",
//     "I'm about to cry a river... 🌊",
//     "Fine, I won't ask again... or will I? 🤔",
//     "Come on, you know you want to say yes!"
// ];


const messages = [
    "Are you really sure? 🤔",
    "Think about it carefully! 🧐",
    "Are you 100% positive? 😅",
    "Please say yes! 🥺",
    "You know you want to! 😉",
    "I'll be sad if you say no... 😢",
    "Please reconsider! 🥰",
    "Don't break my heart! 💔",
    "Last chance to say yes... 🤞",
    "Just say yes already! 💕"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 70) + "px";
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
