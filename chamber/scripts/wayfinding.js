// Get the current URL or any other condition that indicates the homepage
const currentUrl = window.location.href;

// Get the home link element
const homeLink = document.getElementById('home-link');

// Check if the current URL matches the homepage URL
if (currentUrl === 'https://jvrabang.github.io/wdd230/chamber/') {
    // Add the 'active' class to the home link
    homeLink.classList.add('active');
}
