import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Books.css';
import Pagination from './Pagination';

function Books() {
  const [bookdata, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState();
  const [active, setActive] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const response1 = await axios.get(`http://18.177.140.79:8080/books/`);

      setBooks(response1.data);
    }

    fetchData();
  }, []);

  const handleClick = (data: any) => {
    setActive(data.id);
    setSelectedBook(data['id'])
  }
  const listItems = bookdata.map((data, i) =>
    <button key={i} className={active === data['id'] ? "active" : undefined} onClick={() => handleClick(data)}>{data['title']} </button>
  );
  return (
    <div className="App">
      <div>{listItems}</div>
      <Pagination selectedBook={selectedBook} />
    </div>

  );
}

export default Books;
