const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    var chapterInput = input.value.trim();

    if (chapterInput !== "") {
        var li = document.createElement("li");
        var deleteButton = document.createElement("button");
        
        li.textContent = chapterInput;
        deleteButton.textContent = "❌";

        li.append(deleteButton);
        list.append(li);
    
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        input.value = "";
    } else {
        alert("Please enter your Top 10 Chapter");

        input.focus();

        return;
    }
});

