
import React, { useEffect, useState } from 'react';
import { Book } from '../models/book';
import ApiService from '../services/api-service';
import './Books.css';
import Pagination from './Pagination';

function Books() {
  console.log('Books')
  const [bookdata, setBooks] = useState<Book[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<number>();
  const [active, setActive] = useState<number>();


  useEffect(() => {
    const fetchData = async () => {
      const response1 = await ApiService.getBooks();

      setBooks(response1.data);
    }

    fetchData();
  }, []);

  const handleClick = (data: Book) => {
    setActive(data.id);
    setSelectedBookId(data.id)
  }
  const listItems = bookdata.map((data, i) =>
    <button key={i} className={active == data.id ? "active" : undefined} onClick={() => handleClick(data)}>{data.title} </button>
  );
  return (
    <div className="App">
      <div>{listItems}</div>
      <Pagination selectedBook={selectedBookId} />
    </div>

  );
}

export default Books;
