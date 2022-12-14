let myLibrary = [];

class Book {
    constructor (title, author, pages, read=false) {
        // Constructor to book class
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    };

    changeRead () {
        this.read = !this.read;
    };
};

function addBookToLibrary(book) {
    // Adds books to myLibrary
    myLibrary.push(book);
};

function displayBooks() {
    // Displays each book in myLibrary
    const cont = document.querySelector('.content');
    cont.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let main_div = document.createElement('div');
        main_div.className = 'cards';
        main_div.classList += ' shadow-lg';

        let title_div = document.createElement('div');
        title_div.className = 'title-div';
        title_div.innerText = `"${myLibrary[i].title}"`;

        let author_div = document.createElement('div');
        author_div.className = 'author-div';
        author_div.innerText = `By: ${myLibrary[i].author}`;

        let pages_div = document.createElement('div');
        pages_div.className = 'pages-div';
        pages_div.innerText = `${myLibrary[i].pages} pages`;

        let read_button = document.createElement('button');
        read_button.className = 'read-btn';
        if (myLibrary[i].read) {
            read_button.innerText = 'Read';
            read_button.classList += ' finished-btn';
            read_button.id = `read${i}`;
        }
        else {
            read_button.innerText = 'Not read';
            read_button.classList += ' not-finished-btn';
            read_button.id = `read${i}`;
        };

        let delete_button = document.createElement('button');
        delete_button.className = 'delete-btn';
        delete_button.id = `delete${i}`;
        delete_button.innerText = 'Delete';

        main_div.appendChild(title_div);
        main_div.appendChild(author_div);
        main_div.appendChild(pages_div);
        main_div.appendChild(read_button);
        main_div.appendChild(delete_button);
        cont.appendChild(main_div);
    };
    deleteBook();
    toggleRead();
};

function addBooks() {
    // Adds functionality to "Add book" button
    const add_btn = document.querySelector('.main-btn');
    const background = document.querySelector('.bg');
    const form = document.querySelector('.form');

    add_btn.addEventListener('click', (e) => {
        background.classList += ' visible';
        form.classList += ' visible';
    });
    background.addEventListener('click', (e) => {
        background.classList.remove('visible');
        form.classList.remove('visible');
    });

};

function getFormData() {
    var title = document.querySelector('#title').value;
    var author = document.querySelector('#author').value;
    var pages = document.querySelector('#pages').value;
    var read = document.querySelector('#read').checked;

    var newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
};

function removeForm()  {
    const background = document.querySelector('.bg');
    const form = document.querySelector('.form');

    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;

    background.classList.remove('visible');
    form.classList.remove('visible');
};

function deleteBook() {
    var allButtons = document.querySelectorAll('button[id^=delete]');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', (e) => {
          myLibrary.splice(Number(e.target.id[6]), 1);
          displayBooks();  
        });
      };
};

function toggleRead() {
    var allButtons = document.querySelectorAll('button[id^=read]');
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', (e) => {
          myLibrary[Number(e.target.id[4])].changeRead();
          displayBooks();  
        });
    };
}

displayBooks();
addBooks();
    