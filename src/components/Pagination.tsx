import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Bookspages from './Bookspages';


function Pagination(props: any) {
  const [pageData, setPageData] = useState([]);
  const [selectedBookpages, setSelectedBookpages] = useState();
  const [active, setActive] = useState("");

  useEffect(() => {
    if (props.selectedBook) {
      fetchData().then((data) => {
        setPageData(data);
      });
    }
  }, [props.selectedBook]);

  const fetchData = async () => {

    const response1 = await axios.get(`http://18.177.140.79:8080/books/${props.selectedBook}/`);
    return response1.data.chapter_ids;
  }
  function onChange(val: any) {
    handleClick(pageData[val]);
  }

  const handleClick = (data: any) => {
    setActive(data);
    setSelectedBookpages(data)
  }

  const listItems = pageData.map((data, i) =>
    <button key={i} className={active === data ? "active" : undefined} onClick={() => handleClick(data)}>{data}</button>
  );
  return (
    <div className="App">
      <div>{listItems}</div>
      <Bookspages selectedBookData={selectedBookpages} onNameChange={onChange} />

    </div>
  );
}

export default Pagination;
