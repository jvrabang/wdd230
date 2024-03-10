document.addEventListener('DOMContentLoaded', function() {
    // Get the last visit date from localStorage
    let lastVisit = localStorage.getItem('lastVisit');
    if (lastVisit) {
        // Calculate the time difference between the last visit and the current time
        let timeDifference = Date.now() - new Date(lastVisit).getTime();
        // Convert the time difference to days
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        // Display appropriate message based on the time difference
        let welcomeMessage = document.getElementById('welcome-message');
        if (daysDifference === 0) {
            welcomeMessage.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            welcomeMessage.textContent = "You last visited 1 day ago.";
        } else {
            welcomeMessage.textContent = "You last visited " + daysDifference + " days ago.";
        }
    } else {
        // If it's the first visit, display a welcome message
        document.getElementById('welcome-message').textContent = "Welcome! Let us know if you have any questions.";
    }

    // Update the last visit date in localStorage
    localStorage.setItem('lastVisit', new Date().toISOString());
});
