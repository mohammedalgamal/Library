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

let book1 = new Book('the mesribles', 'martin luthor', 750, true);
addBookToLibrary(book1);

let book2 = new Book('the beauty and the beast', 'mohammed megahed', 654);
addBookToLibrary(book2);
addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);addBookToLibrary(book2);


function displayBooks() {
    // Displays each book in myLibrary
    const cont = document.querySelector('.content');
    cont.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let main_div = document.createElement('div');
        main_div.className = 'cards';
        main_div.classList += ' shadow-lg'

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
        }
        else {
            read_button.innerText = 'Not read';
            read_button.classList += ' not-finished-btn';
        };

        let delete_button = document.createElement('button');
        delete_button.className = 'delete-btn';
        delete_button.innerText = 'Delete';

        main_div.appendChild(title_div);
        main_div.appendChild(author_div);
        main_div.appendChild(pages_div);
        main_div.appendChild(read_button);
        main_div.appendChild(delete_button);
        cont.appendChild(main_div);

    }
};

function addBooks() {
    // Adds functionality to "Add book" button
    const add_btn = document.querySelector('.main-btn');
    add_btn.addEventListener('click', (e) => {
        displayBooks();
    });
};


displayBooks();
//addBooks();