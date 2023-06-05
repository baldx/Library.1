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

const popUpForm = document.querySelector(".popUp");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

submitBook.addEventListener("click", addBookToLibrary());
addBookBtn.addEventListener("click", () => popUpForm.style.display = "block");

function addBookToLibrary() {
   
    popUpForm.style.display = "none";
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = pagesInput.value;
    let newBook = new Book(title, author, pages);
    myLibrary.push(newBook);
    form.reset();
}


const getReadValue = () => {
    if (form.querySelector('input[name="read"]:checked').value == "yes") return true;
    else return false;
}

const clearForm = () => {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
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


removeBook.forEach(element => {
    element.addEventListener("click", () => {
        element.parentNode.remove(element.parentNode);
        myLibrary.pop();
    })
})