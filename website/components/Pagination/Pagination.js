import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const ExamplePagination = () => {
    const [data, setData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items to display per page

    // Dummy data for demonstration
    const dummyData = Array.from({ length: 50 }, (_, i) => ({ id: i, name: `Item ${i + 1}` }));

    useEffect(() => {
        // Function to fetch data for the current page
        const fetchData = () => {
            const startIndex = currentPage * itemsPerPage;
            const paginatedData = dummyData.slice(startIndex, startIndex + itemsPerPage);
            setData(paginatedData);
        };

        // Calculate total number of pages
        setPageCount(Math.ceil(dummyData.length / itemsPerPage));

        // Fetch data for the current page
        fetchData();
    }, [currentPage]);

    // Handler for page change event
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div>
            <h1>Example Pagination</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>

            {/* Pagination component */}
            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                previousLabel={"Previous"}
                nextLabel={"Next"}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
            />
        </div>
    );
};

export default ExamplePagination;
