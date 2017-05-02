var ages: number[] = [1, 4, 9, 32, 33];
console.log('Ages under 18: ' + ages.filter(a => (a % 2) == 0));
let multiply = (a: number, b: number) => (a * b);
let a: number = 11;
let b: number = 22;

console.log("multiply a * b: = " + multiply(a, b));

function PublicationMessage(year: number): string {
    return 'Date published: ' + year;
}

let publishFunc: (someYear: number) => string;
publishFunc = PublicationMessage;
let message: string = publishFunc(2016);


function HowManyYearsAgo(year: number): number {
    var currentTime = new Date();
    var yearNow = currentTime.getFullYear();
    return yearNow - year;
}

let ageFunc: (someYear: number) => number;
ageFunc = HowManyYearsAgo;
console.log("My age is: " + ageFunc(1989));

// Optional and Default Parameters

function CreateCustomer(name: string, age? : number) {} // Optional Parameter noted by ?
function GetBookByTitle(title: string = 'The C Programming Language'){} // Sets default parameter
//function GetBookByTitle2(title: string = GetMostPopularBook()){} // Functions can be default parameters

// Rest Parameters
function GetBooksReadForCust(name: string, ...bookIDs: number[]){
    console.log(name + " - " + bookIDs);
}
let books = GetBooksReadForCust('Leigh', 2, 5);

// Implementing Function Overloads
// function GetTitles(author:string):string[]; // THESE DO NOTHING
// function GetTitles(available: boolean): string[]; // THESE DO NOTHING
function GetTitles(bookProperty: string | boolean): string[]{
    let foundTitles: string[];
    if (typeof bookProperty == 'string'){}
    else if (typeof bookProperty =='boolean'){

    }
    return foundTitles;
}