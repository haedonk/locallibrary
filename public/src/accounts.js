function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((aAccount, bAccount) =>
    aAccount.name.last.toLowerCase() > bAccount.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let count = 0;
  const borrowed = books.map(book => book.borrows);
  for(let subArray in borrowed){
    for(let accountBorrowed in borrowed[subArray]){
      if( borrowed[subArray][accountBorrowed].id === id) count++;
    }
  }
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
  const id = account.id;
  const possessedArray = [];
  books.forEach(book => {
    const borrows = book.borrows[0];
    if(borrows.returned === false && borrows.id === id){
      const theAuthor = authors.filter(author => author.id === book.authorId);
      const theBook = {
        id: book.id,
        title: book.title,
        genre: book.genre,
        authorId: book.authorId,
        author: {...theAuthor[0]},
        borrows: book.borrows,
      };
      possessedArray.push(theBook);
    }
  });
  return possessedArray;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
