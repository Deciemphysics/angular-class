"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var enums_1 = require("./enums");
var classes_1 = require("./classes");
function getAllBooks() {
    var books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: enums_1.Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: enums_1.Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: enums_1.Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: enums_1.Category.Fiction }
    ];
    return books;
}
function logFirstAvailable(books) {
    if (books === void 0) { books = getAllBooks(); }
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function getBookTitlesByCategory(categoryFilter) {
    if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
    // console.log('Getting books in category: ' + categoryFilter); // prints the number, not the name of the enum
    console.log('Getting books in category: ' + enums_1.Category[categoryFilter]);
    var allBooks = getAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function logBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function getBookByID(id) {
    var allBooks = getAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function createCustomerID(name, id) {
    return name + id;
}
function createCustomer(name, age, city) {
    console.log('Creating customer ' + name);
    if (age) {
        console.log('Age: ' + age);
    }
    if (city) {
        console.log('City: ' + city);
    }
}
function checkoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log('Checking out books for ' + customer);
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = getBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function getTitles(bookProperty) {
    var allBooks = getAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + " by " + book.author);
}
var favoriteLibrarian = new classes_1.UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda');
//***************************************************************************
var myBook = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: enums_1.Category.Fiction,
    pages: 347,
    markDamaged: function (r) { return console.log("Damaged: " + r); }
};
// printBook(myBook);
// myBook.markDamaged('Burned');
var logDamage;
logDamage = function (damage) { return console.log('Damage reporter: ' + damage); };
logDamage('dog eared and water damaged');
// let favoriteAuthor: Author = {
// };
// let hermansBooks = getTitles('Herman Melville');
var hermansBooks = getTitles(false);
hermansBooks.forEach(function (title) { return console.log(title); });
// let myBooks: string[] = checkoutBooks('Thorne', 1, 2);
// let myBooks: string[] = checkoutBooks('Thorne', 1, 3, 4);
// myBooks.forEach(title => console.log(title));
// logFirstAvailable();
// with a default argument, you can call getbookTitlesByCategory with or without parameters:
// let poetryBooks = getBookTitlesByCategory(Category.Poetry);
// poetryBooks.forEach(title => console.log(title));
// let fictionBooks = getBookTitlesByCategory();
// fictionBooks.forEach(title => console.log(title));
// createCustomer('Michelle');
// createCustomer('Michelle', 6);
// createCustomer('Michelle', 6, 'Atlanta');
// let x: number;
// x = 5;
//
// let IdGenerator: (chars: string, nums: number) => string;
// /* the following two lines of code accomplish the same work */
// // IdGenerator = createCustomerID;
// IdGenerator = (name: string, id: number) => { return id + name; };
//
// let myID: string = createCustomerID('daniel', 10); // change argument 10 to a different value each time you try different code above
// console.log(myID);
// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2012);
// ref.printItem();
// ref.publisher = "Random Data Publishing";
// console.log(ref.publisher);
// let refBook: ReferenceItem = new Encyclopedia('WorldPedia', 1900, 10);
// refBook.printCitation();
var Newspaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new Newspaper('The Gazette', 2016);
myPaper.printCitation();
//# sourceMappingURL=libraryapp.js.map