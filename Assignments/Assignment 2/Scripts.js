// Part 1 and Part 2
const book = {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    year: 2004,
    getSummary: function (){
        return {title: this.title,author: this.author,year: this.year} ;
    }
}

// Part 3
book.genre = null;

// part 4
delete book.year;

// Part 5
console.log(book);