let myLibrary = [
    {
        title: "Dale Carnegie",
        author: "How to win friends and influence people",
        pages: 214,
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
let readInput = form.getElementsByTagName("read");
let submitBook = form.querySelector("#submit");
let body = document.querySelector("body");

const popUpForm = document.querySelector(".popUp");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



submitBook.addEventListener("click", (element) => {
    addBookToLibrary();
    element.preventDefault();
    // body.style.background = "#FFE79B"
});
addBookBtn.addEventListener("click", () => {
    popUpForm.style.display = "block";
    // body.style.background = "#898065"
})

function addBookToLibrary() {
    popUpForm.style.display = "none";
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, getReadValue());
    myLibrary.push(newBook);
    visual();
    form.reset();
}

function visual() {
    const books = document.querySelectorAll(".book");
    books.forEach(book => library.removeChild(book));
    
    for (let index = 0; index < myLibrary.length; index++) {
        createBook(myLibrary[index])
    }
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
    readButton.style.backgroundColor = "#3A606E";
    }
    else {
    readButton.textContent = "Read";
    readButton.style.backgroundColor = "#828E82";
    }
    
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    bookDiv.appendChild(removeButton);

    library.appendChild(bookDiv);

    removeButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(item), 1);
        visual();
    })

    readButton.addEventListener("click", () => {
        item.read = !item.read;
        visual();
    })

}