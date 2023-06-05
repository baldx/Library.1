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
const library = document.querySelector(".library");


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

function addBookToLibrary(event) {
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




function createBook(item) {
    const bookDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");
    const removeButton = document.createElement("button");
    const readButton = document.createElement("button");

    bookDiv.classList.add("book");
    bookDiv.setAttribute("id", myLibrary.indexOf(item));

    titleDiv.textContent = item.title;
    titleDiv.classList.add("title");
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add("author");
    bookDiv.appendChild(authorDiv);

    pagesDiv.textContent = item.pages;
    pagesDiv.classList.add("pages");
    bookDiv.appendChild(pagesDiv);

    readButton.classList.add("read");
    bookDiv.appendChild(readButton);
    if (item.read === false) {
    readButton.textContent = "Not Read"; 
    readButton.style.backgroundColor = "#9336B4";
    }
    else {
    readButton.textContent = "Read";
    readButton.style.backgroundColor = "#DD58D6";
    }
    
    removeButton.textContent = "Remove";
    removeButton.setAttribute("id", "removeBtn");
    bookDiv.appendChild(removeButton);

    library.appendChild(bookDiv);

    removeBook.forEach(element => {
        element.addEventListener("click", () => {
            element.parentNode.remove(element.parentNode);
            myLibrary.pop();
        })
    })
}