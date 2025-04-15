'use client';

import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import './supermarkets.scss';

const SupermarketsPage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = posts.slice(start, end);
  const pageCount = Math.ceil(posts.length / itemsPerPage);

  return (
    <div className="supermarkets-container">
      <h1 className="page-title">سوپرمارکت دیجی‌کالا</h1>

      {currentItems.map((item: any) => (
        <div key={item.id} className="post-card">
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={({ selected }) => setPage(selected)}
        previousLabel="قبلی"
        nextLabel="بعدی"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default SupermarketsPage;
