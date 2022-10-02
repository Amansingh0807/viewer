import React from 'react';
import { IBook } from '../models/book';

interface BooksProps {
    books: IBook[];
    bookId: number | undefined;
    handleBookChange: (bookId: number) => void;
}

const Books: React.FC<BooksProps> = ({ books, bookId, handleBookChange }) => {
    return (
        <div className="books-container">
            {books.map((book: IBook) => (
                <button
                    key={book.id}
                    className={book.id === bookId ? 'selected' : ''}
                    onClick={() => handleBookChange(book.id)}
                >
                    {book.title}
                </button>
            ))}
        </div>
    );
};

export default Books;
