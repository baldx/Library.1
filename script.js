let myLibrary = [1, 2, 3, 4, 5, 6];


let readBtn = document.querySelectorAll(".readBtn");
let addBookBtn = document.querySelector(".addBook");
let removeBook = document.querySelectorAll(".remove");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    //do shit here
}

readBtn.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("not-read")

        if (element.classList.contains("not-read")) {
            element.textContent = "Not Read";
        }
        else element.textContent = "Read";
    })
});

addBookBtn.onclick = () => {
    console.log("test");
}

removeBook.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.remove(element.parentNode);
        myLibrary.pop();
    })
})