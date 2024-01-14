function getCurrentYear() {
    return new Date().getFullYear();
}
  
function updateCopyrightYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        const currentYear = getCurrentYear();
        currentYearElement.textContent = currentYear;
    }
}

function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateCopyrightYear();
    updateLastModifiedDate();
});
