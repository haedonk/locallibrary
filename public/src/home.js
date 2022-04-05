function getTotalBooksCount(books) {
  if(books.length === 0) return 0;
  let count = [];
  books.forEach(book => count.push(1));
  const theCount = count.reduce((total, count) => total + count);
  return theCount;
}

function getTotalAccountsCount(accounts) {
  let count = 0;
  accounts.forEach(account => count++);
  return count;
} 

function getBooksBorrowedCount(books) {
  let count = 0;
  books.forEach(book => {
    if(book.borrows[0].returned === false) count++;
  })
  return count;
}

function getMostCommonGenres(books) {
  let mostCommon = [];
  books.forEach(book => {
    if(mostCommon.length === 0) mostCommon.push({name: book.genre, count: 1});
    else{
      addGenreNum(mostCommon, book.genre);
    }
  })
  mostCommon.sort((aCommon, bCommon) => (aCommon.count > bCommon.count ? -1 : 1));
  mostCommon = mostCommon.slice(0,5);
  return mostCommon;
}

function addGenreNum(mostCommon, bookGenre){
  let done = true;
  mostCommon.forEach(common => {
    if(common.name === bookGenre){
      common.count++;
      done = false;
      return;
    }
  })
  if(done) mostCommon.push({name: bookGenre, count: 1});
  return;
}

function getMostPopularBooks(books) {
  popularBooks = [];
  books.forEach(book => {
    popularBooks.push({name: book.title, count: book.borrows.length})
  })
  popularBooks.sort((aPop, bPop) => (aPop.count > bPop.count ? -1 : 1));
  popularBooks = popularBooks.slice(0,5);
  return popularBooks;
}

function getMostPopularBooks(books) {
  popularBooks = [];
  books.forEach(book => {
    popularBooks.push({name: book.title, count: book.borrows.length})
  })
  popularBooks.sort((aPop, bPop) => (aPop.count > bPop.count ? -1 : 1));
  popularBooks = popularBooks.slice(0,5);
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  let popAuthor = [];
  books.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    const name = `${author.name.first} ${author.name.last}`
    const numBorrows = book.borrows.length;
    if(popAuthor.length === 0) popAuthor.push({name: name, count: numBorrows});
    addAuthorBorrows(name, numBorrows, popAuthor);
  });
  popAuthor.sort((aPop, bPop) => (aPop.count > bPop.count ? -1 : 1));
  popAuthor = popAuthor.slice(0,5);
  return popAuthor;
}

function addAuthorBorrows(name, numBorrows, popAuthor){
  let done = true;
  popAuthor.forEach(author => {
    if(author.name === name){
      author.count += numBorrows;
      done = false;
      return;
    }
  })
  if(done) popAuthor.push({name: name, count: numBorrows});
  return;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
