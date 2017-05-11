import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from "./interfaces";
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from "./classes";


function getAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];
    return books;
}

function logFirstAvailable(books = getAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}



function getBookTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    // console.log('Getting books in category: ' + categoryFilter); // prints the number, not the name of the enum
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = getAllBooks();
    const filteredTitles: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}

function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title);
    }
}

function getBookByID(id: number) {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function createCustomerID(name: string, id: number): string {
    return name + id;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer ' + name);

    if (age) {
        console.log('Age: ' + age);
    }

    if (city) {
        console.log('City: ' + city);
    }
}

function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for ' + customer);
    let booksCheckedOut: string[] = [];
    for (let id of bookIDs) {
        let book = getBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}

/* Example of function overloading */
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    const allBooks = getAllBooks();
    const foundTitles: string[] = [];

    if (typeof bookProperty == 'string') {
        // get all books by a particular author
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    } else if (typeof bookProperty == 'boolean') {
        // get all books based on specified availability
        for (let book of allBooks) {
            if (book.available == bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}

function printBook(book: Book): void {
    console.log(book.title + " by " + book.author);
}

let favoriteLibrarian: Librarian = new UniversityLibrarian();
favoriteLibrarian.name = 'Sharon';
favoriteLibrarian.assistCustomer('Lynda');

//***************************************************************************

let myBook: Book = {
    id: 5,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    available: true,
    category: Category.Fiction,
    pages: 347,
    markDamaged: (r:string) => console.log("Damaged: " + r)
};

// printBook(myBook);
// myBook.markDamaged('Burned');

let logDamage: DamageLogger;

logDamage = (damage: string) => console.log('Damage reporter: ' + damage);
logDamage('dog eared and water damaged');

// let favoriteAuthor: Author = {
   
// };

// let hermansBooks = getTitles('Herman Melville');
let hermansBooks = getTitles(false);
hermansBooks.forEach(title => console.log(title));

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

let Newspaper = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspaper: ${this.title}`)
    }
}

let myPaper = new Newspaper('The Gazette', 2016);

myPaper.printCitation();

