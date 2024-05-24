import { editBook, getBook, getBooks } from './api.ts';
import './style.css';

// Only used for testing purposes
const _resetBookTitle = async () => {
  await editBook({
    ...book,
    title: 'Java Web Scraping Handbook',
  });
};

/** test the client */

const book = await getBooks().then((books) => books[0]);
const editedBook = await editBook({
  ...book,
  title: book.title + '_edited',
});
const bookAgain = await getBook(book.id);

console.log('book', book);
console.log('editedBook', editedBook);
console.log('bookAgain', bookAgain);
_resetBookTitle();
