let myLibrary = [];

function Book(title, author, pages, read=false) {
    // Constructor to book object
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary(book) {
    // Adds books to myLibrary
    myLibrary.push(book);
};
