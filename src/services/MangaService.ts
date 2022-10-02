import http from '../http-common';
import { IBook } from '../models/book';
import { IChapter } from '../models/chapter';

const getBooks = () => {
    return http.get<Array<IBook>>('/books/');
};

const getBookDetails = (bookId: number) => {
    return http.get<IBook>(`/books/${bookId}/`);
};

const getChapterDetails = (chapterId: number) => {
    return http.get<IChapter>(`/chapters/${chapterId}/`);
};

const MangaService = {
    getBooks,
    getBookDetails,
    getChapterDetails,
};

export default MangaService;
