import { Book } from '../domain/book/Book';

interface BookListItemProps {
  book: Book;
}

export const BookListItem = ({ book }: BookListItemProps) => {
  return (
    <div className="example-book">
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
    </div>
  );
};
