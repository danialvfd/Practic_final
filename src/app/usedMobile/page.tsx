'use client';

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import './usedMobile.scss';

const usedMobilePage = () => {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(0);
    const itemsPerPage = 5;
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => setComments(data));
    }, []);

    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = comments.slice(start, end);
    const pageCount = Math.ceil(comments.length / itemsPerPage);
    return (
        <div className="usedMobile-container">
            <h1 className="page-title">تخفیف موبایل‌کارکرده</h1>
            {currentItems.map((item: any) => (
                <div key={item.id} className="post-card">
                    <h3>{item.name}</h3>
                    <p>{item.body}</p>  
                    <p>{item.email}</p>
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

export default usedMobilePage;