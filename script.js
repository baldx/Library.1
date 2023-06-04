let myLibrary = [
    {
        title: "Abdi",
        author: "Mokandez den tredje",
        pages: 420,
        read: true
    }
];


let readBtn = document.querySelectorAll(".readBtn");
let addBookBtn = document.querySelector(".addBook");
let removeBook = document.querySelectorAll(".remove");
let library = document.querySelector(".library");


let form = document.querySelector("form");
let titleInput = form.querySelector("#title");
let authorInput = form.querySelector("#author");
let pagesInput = form.querySelector("#number");
let submitBook = form.querySelector("#submit");

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let read = getReadValue();
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

const getReadValue = () => {
    if (form.querySelector('input[name="read"]:checked').value == "yes") return true;
    else return false;
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
            <fieldset class="radiogroup">
                <legend>Read book?</legend>
                <label for="yes">
                    <input type="radio" name="yes" id="yes" value="yes"> Yes
                </label>
                <label for="no">
                    <input type="radio" name="no" id="no" value="no"> No
                </label>
            </fieldset>
            <button type="submit" id="submit">Add book</button>
        </form>
    `
}

submitBook.addEventListener("click", element => {
    element.preventDefault();
})

removeBook.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.remove(element.parentNode);
        myLibrary.pop();
    })
})