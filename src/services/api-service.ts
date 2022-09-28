import http from '../environment';
import { Book, Chapter } from '../models/book';


const getBooks = () => {
    return http.get<Array<Book>>('/books/');
};

const getBookDetails = (bookId: number) => {
    return http.get<Book>(`/books/${bookId}/`);
};

const getChapterDetails = (chapterId: number) => {
    return http.get<Chapter>(`/chapters/${chapterId}/`);
};

const ApiService = {
    getBooks,
    getBookDetails,
    getChapterDetails,
};

export default ApiService;
