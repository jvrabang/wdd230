// Function to check if the current day is Monday, Tuesday, or Wednesday
function isBannerVisible() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday is 0, Monday is 1, and so on

    return dayOfWeek >= 0 && dayOfWeek <= 3; // Monday to Wednesday
}

document.addEventListener('DOMContentLoaded', function() {
    const bannerSection = document.getElementById('banner-section');
    const closeBannerButton = document.getElementById('close-banner');

    // Show banner only on Mondays, Tuesdays, and Wednesdays
    if (isBannerVisible()) {
        bannerSection.style.display = 'block';
    }

    // Close banner when the close button is clicked
    closeBannerButton.addEventListener('click', function() {
        bannerSection.style.display = 'none';
    });
});