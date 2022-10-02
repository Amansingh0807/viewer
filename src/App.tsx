import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Books from "./components/Books";
import Chapters from "./components/Chapters";
import Pages from "./components/Pages";
import { IBook } from "./models/book";
import { IPage } from "./models/chapter";
import MangaService from "./services/MangaService";

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [chapters, setChapters] = useState<number[]>([]);
  const [bookId, setBookId] = useState<number>();
  const [chapterId, setChapterId] = useState<number>(0);
  const [pageId, setPageId] = useState<number>(0);
  const [pages, setPages] = useState<IPage[]>([]);

  useEffect(() => {
    MangaService.getBooks()
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
        setBookId(response.data[0].id);
        setChapters(response.data[0].chapter_ids);
        setChapterId(response.data[0].chapter_ids[0]);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    if (chapterId) {
      MangaService.getChapterDetails(chapterId)
        .then((response) => {
          console.log(response.data);
          setPages(response.data.pages);
          setPageId(0);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
  }, [chapterId]);

  const handleBookChange = useCallback(
    (bookId: number) => {
      const book = books.find((item) => item.id === bookId);
      setBookId(bookId);
      setChapters(book?.chapter_ids || []);
      setChapterId(book?.chapter_ids[0] || 0);
    },
    [books]
  );

  const handleChapterChange = useCallback((chapterId: number) => {
    setChapterId(chapterId);
  }, []);

  const handlePrevious = useCallback(() => {
    console.log(pageId);
    if (pageId > 0) {
      setPageId(pageId - 1);
    } else {
      const chapterIndex = chapters.indexOf(chapterId);
      if (chapterIndex > 0) {
        setChapterId(chapters[chapterIndex - 1]);
        setPageId(0);
      }
    }
  }, [pageId, chapterId, chapters]);

  const handleNext = useCallback(() => {
    console.log(pageId);
    if (pageId < pages.length - 1) {
      setPageId(pageId + 1);
    } else {
      const chapterIndex = chapters.indexOf(chapterId);
      if (chapterIndex < chapters.length - 1) {
        setChapterId(chapters[chapterIndex + 1]);
        setPageId(0);
      }
    }
  }, [pageId, chapterId, chapters, pages]);

  return (
    <div className="container">
      <Books
        books={books}
        bookId={bookId}
        handleBookChange={handleBookChange}
      />
      <Chapters
        chapters={chapters}
        chapterId={chapterId}
        handleChapterChange={handleChapterChange}
      />
      <Pages
        pages={pages}
        pageId={pageId}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      />
    </div>
  );
}

export default App;
