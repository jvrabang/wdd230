document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.getElementById("grid-view-button");
    const listViewButton = document.getElementById("list-view-button");
    const gridContainer = document.getElementById("grid-container");
    const listContainer = document.getElementById("list-container");

    gridButton.addEventListener("click", function () {
        gridContainer.style.display = "grid";
        listContainer.style.display = "none";
    });

    listViewButton.addEventListener("click", function () {
        listContainer.style.display = "block";
        gridContainer.style.display = "none";
    });
});
