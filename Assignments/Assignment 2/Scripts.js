// Part 1
const book = {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 2004,
}

// Part 2
book.summary = "Something interesting";
console.log(book.summary);

// Part 3
book.genre = null;

// part 4
delete book.year;

// Part 5
console.log(book);