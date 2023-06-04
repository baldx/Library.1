let myLibrary = [1, 2, 3, 4];


let readBtn = document.querySelectorAll(".readBtn");
let addBookBtn = document.querySelector(".addBook");
let removeBook = document.querySelectorAll(".remove");
let library = document.querySelector(".library");

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
    library.innerHTML += `
    <form>
        <label for="title">Title</label>
        <input type="text" name="title" id="title" required maxlength="50">
        <label for="author">Author</label>
        <input type="text" name="author" id="author" required maxlength="50">
        <label for="pages">Pages</label>
        <input type="number" name="number" id="number" required min="0">
        <button type="submit">Add book</button>
    </form>
    `
}

removeBook.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.remove(element.parentNode);
        myLibrary.pop();
    })
})