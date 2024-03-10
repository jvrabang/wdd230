const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();
localStorage.setItem('lastVisit', currentDate);

if (lastVisit) {
    lastVisit = parseInt(lastVisit);
}

const millisecondsPerDay = 1000 * 60 * 60 * 24;
const differenceInDays = (currentDate - lastVisit) / millisecondsPerDay;

const messageElement = document.getElementById('message');

if (!lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else if (differenceInDays < 1) {
    messageElement.textContent = "Back so soon! Awesome!";
} else {
    const daysText = differenceInDays === 1 ? "day" : "days";
    messageElement.textContent = `You last visited ${Math.floor(differenceInDays)} ${daysText} ago.`;
}
