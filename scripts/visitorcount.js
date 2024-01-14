function getNumberOfVisits() {
    if (localStorage.getItem("numberOfVisits")) {
        let visits = parseInt(localStorage.getItem("numberOfVisits")) + 1;
        localStorage.setItem("numberOfVisits", visits);
        return visits;
    } else {
        localStorage.setItem("numberOfVisits", 1);
        return 1;
    }
}

function updateNumberOfVisits() {
    let visits = getNumberOfVisits();

    let numberOfVisitsElement = document.getElementById("numberOfVisits");

    numberOfVisitsElement.textContent = `Page Visits: ${visits}`;
}

// Call the updateNumberOfVisits function when the page loads
window.onload = updateNumberOfVisits;
