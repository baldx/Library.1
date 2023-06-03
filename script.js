let myLibrary = [];


let readBtn = document.querySelectorAll(".readBtn");

readBtn.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("not-read")

        if (element.classList.contains("not-read")) {
            element.textContent = "Not Read";
        }
        else element.textContent = "Read";
    })
});

function Book() {
    //constructor
}

function addBookToLibrary() {
    //do shit here
}

