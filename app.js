console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");



class Book {
    constructor (title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor () {
        this.books = [];
        this.bookCount = 0;
    }

    addBook(book){
        this.books.push(book);
        this.bookCount++;
        let newBookRow = document.createElement("tr");
        let newBookTitle = document.createElement("td");
        let newBookAuthor = document.createElement("td");
        let newBookHasRead = document.createElement("td");
        let table = document.getElementById("table");
        let checkBox = document.createElement("input");
        let removeButtonBox = document.createElement("td");
        let removeButton = document.createElement("button");

        const checkboxDisableOnClick = () => {
            if (checkBox.checked === true) {
                checkBox.disabled = true;
            }
        }

        checkBox.onclick = checkboxDisableOnClick;

        const removeOnClick = (event) => {
            table.removeChild(newBookRow);
            this.removeBook(book);
        }
        removeButton.onclick = removeOnClick;
        
        checkBox.type = "checkbox";
        checkBox.checked = book.read;
        checkBox.disabled = book.read;
        
        table.appendChild(newBookRow);
        newBookRow.appendChild(newBookTitle);
        newBookRow.appendChild(newBookAuthor);
        newBookRow.appendChild(newBookHasRead);
        newBookRow.appendChild(removeButtonBox);
        removeButtonBox.appendChild(removeButton);
        newBookHasRead.appendChild(checkBox);

        newBookTitle.textContent = book.title;
        newBookAuthor.textContent = book.author;
        removeButton.textContent = "Remove";
        console.log(this.books);
        console.log(this.bookCount);
    }

    removeBook(bookToRemove){
        this.bookCount--
        const removeFromArrayOnClick = this.books.filter((book) => {
            return book !== bookToRemove;
        })
        this.books = removeFromArrayOnClick;
        console.log(this.books);
        console.log(this.bookCount);
    }
        

}


let newLibrary = new Library ([], 0);

const submit = document.getElementById("submit");
const bookSubmit = (click) => {
    click.preventDefault();
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let read = document.getElementById("hasRead");
    let newBook = new Book (title.value, author.value, read.checked);
    newLibrary.addBook(newBook);
    title.value = null;
    author.value = null;
    read.checked = null;
}

submit.addEventListener("click", bookSubmit);
