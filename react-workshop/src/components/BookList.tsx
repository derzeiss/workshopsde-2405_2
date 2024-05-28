import { Book } from '../domain/book/Book';
import { BookListItem } from './BookListItem';

interface BookListProps {
  books_: Book[];
}

export const BookList = (props: BookListProps) => {
  const { books_ } = props;

  return (
    <div className="book-list">
      {books_.map((b) => (
        <BookListItem book={b} key={b.isbn} />
      ))}
    </div>
  );
};
