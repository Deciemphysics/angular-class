var ages = [1, 4, 9, 32, 33];
console.log('Ages under 18: ' + ages.filter(function (a) { return (a % 2) == 0; }));
var multiply = function (a, b) { return (a * b); };
var a = 11;
var b = 22;
console.log("multiply a * b: = " + multiply(a, b));
function PublicationMessage(year) {
    return 'Date published: ' + year;
}
var publishFunc;
publishFunc = PublicationMessage;
var message = publishFunc(2016);
function HowManyYearsAgo(year) {
    var currentTime = new Date();
    var yearNow = currentTime.getFullYear();
    return yearNow - year;
}
var ageFunc;
ageFunc = HowManyYearsAgo;
console.log("My age is: " + ageFunc(1989));
// Optional and Default Parameters
function CreateCustomer(name, age) { } // Optional Parameter noted by ?
function GetBookByTitle(title) {
    if (title === void 0) { title = 'The C Programming Language'; }
} // Sets default parameter
//function GetBookByTitle2(title: string = GetMostPopularBook()){} // Functions can be default parameters
// Rest Parameters
function GetBooksReadForCust(name) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    console.log(name + " - " + bookIDs);
}
var books = GetBooksReadForCust('Leigh', 2, 5);
// Implementing Function Overloads
// function GetTitles(author:string):string[]; // THESE DO NOTHING
// function GetTitles(available: boolean): string[]; // THESE DO NOTHING
function GetTitles(bookProperty) {
    var foundTitles;
    if (typeof bookProperty == 'string') { }
    else if (typeof bookProperty == 'boolean') {
    }
    return foundTitles;
}
//# sourceMappingURL=tsDay1.js.map