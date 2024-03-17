window.addEventListener('DOMContentLoaded', function() {
    // Get the hidden input element
    var formLoadedTimeInput = document.getElementById('formLoadedTime');

    // Set the value of the hidden input field to the current date/time in milliseconds
    formLoadedTimeInput.value = Date.now().toString();
});