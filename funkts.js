function filterBooksByYear(books, year) {
  return books.filter((books) => books.year >= year);
}
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    year: 1967,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];
let filteredBooks = filterBooksByYear(books, 1960);
console.log(filteredBooks);
