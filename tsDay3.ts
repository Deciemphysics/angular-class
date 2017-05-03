// See app stuff
interface LibraryResource{
    catalogNumber: number;
}

interface Book {
    title: string,
}

interface Encyclopedia extends LibraryResource, Book {
    volume: number;
}

let refBook: Encyclopedia = {
    volume: 4,
    title: 'Nope',
    catalogNumber: 7
}