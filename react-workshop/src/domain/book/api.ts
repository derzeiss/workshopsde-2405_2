import { fetchJson } from '../../utils/fetchJson';
import { Book } from './Book';

const URL_API = 'http://localhost:4730';

export const fetchBooks = () => fetchJson<Book[]>(`${URL_API}/books`);

export const fetchBook = (isbn: string) => fetchJson<Book>(`${URL_API}/books/${isbn}`);

export const updateBook = (isbn: string, book: Book) =>
  fetchJson<Book>(`${URL_API}/books/${isbn}`, {
    method: 'put',
    body: JSON.stringify(book),
  });

export const deleteBook = (isbn: string) =>
  fetchJson(`${URL_API}/books/${isbn}`, {
    method: 'delete',
  });
