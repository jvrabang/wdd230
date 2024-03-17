document.addEventListener("DOMContentLoaded", function() {
    const gridButton = document.getElementById('grid-button');
    const listButton = document.getElementById('list-button');
    const memberContainer = document.getElementById('memberContainer');

    gridButton.addEventListener("click", function() {
        memberContainer.classList.remove('list-view');
        memberContainer.classList.add('grid-view');
    });

    listButton.addEventListener("click", function() {
        memberContainer.classList.remove('grid-view');
        memberContainer.classList.add('list-view');
    });
});
