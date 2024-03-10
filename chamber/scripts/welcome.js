// Get the last visit date from localStorage or set it to the current date
const lastVisit = localStorage.getItem('lastVisit');
const currentDate = Date.now();
localStorage.setItem('lastVisit', currentDate);

// Calculate the difference in milliseconds between visits
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const differenceInDays = (currentDate - lastVisit) / millisecondsPerDay;

// Select the message element
const messageElement = document.getElementById('message');

// Display appropriate message based on the time between visits
if (!lastVisit) {
    messageElement.textContent = "Welcome! Let us know if you have any questions.";
} else if (differenceInDays < 1) {
    messageElement.textContent = "Back so soon! Awesome!";
} else {
    const daysText = differenceInDays === 1 ? "day" : "days";
    messageElement.textContent = `You last visited ${Math.floor(differenceInDays)} ${daysText} ago.`;
}
