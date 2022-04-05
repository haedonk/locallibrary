function findAuthorById(authors, id) {
  return authors.find(author => id === author.id);
}

function findBookById(books, id) {
  return books.find(book => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  const partBooks = [[],[]];
  books.forEach(book => {
    if(!book.borrows[0].returned){
      partBooks[0].push(book);
    }
    else{
      partBooks[1].push(book);
    }
  });
  return partBooks;
}


function getBorrowersForBook(book, accounts) {
  const borrows = returnTenOrLess(book);
  const obWithReturned = [];
  for(let i = 0; i < borrows.length; i++){
    const theBorrow = borrows[i];
    const account = accounts.find(account => account.id === theBorrow.id);
    const fixedAccount = {
      id: account.id,
      returned: theBorrow.returned,
      picture: account.picture,
      age: account.age,
      name: account.name,
      company: account.company,
      email: account.email,
      registered: account.registered,
    }
    obWithReturned.push(fixedAccount);
  }
  return obWithReturned;
}

function returnTenOrLess(book){
  const tenOrLess = [];
  const borrows = book.borrows;
  for(let i = 0; i < 10; i++) {
    if(borrows[i] === undefined) return tenOrLess;
    tenOrLess.push(borrows[i]);
  }
  return tenOrLess;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
