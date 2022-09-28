
import React, { useEffect, useState } from 'react';
import { Page } from '../models/book';
import ApiService from '../services/api-service';
import Bookspages from './Bookspages';


function Pagination(props: any) {

  const [pageData, setPageData] = useState<number[]>([]);
  const [selectedBookpages, setSelectedBookpages] = useState<number>();
  const [active, setActive] = useState<number>();

  useEffect(() => {
    if (props.selectedBook) {
      fetchData().then((data) => {
        setPageData(data);
        setSelectedBookpages(0)
      });
    }
  }, [props.selectedBook]);

  const fetchData = async () => {
    const response1 = await ApiService.getBookDetails(props.selectedBook);

    return response1.data.chapter_ids;
  }
  function onChange(val: number) {
    handleClick(pageData[val]);
  }

  const handleClick = (data: number) => {
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
