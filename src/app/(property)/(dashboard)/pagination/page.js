'use client'
import React, { useState, useEffect } from 'react';
import './Page.css'; // Import CSS file for styling

const Page = () => {
  const [todo, setTodo] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todoPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => setTodo(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const indexOfLastTodo = currentPage * todoPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todoPerPage;
  const filteredTodo = todo.filter(todo =>
    todo.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  const currentTodo = filteredTodo.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="container">
     
      <div className="data-grid">
        <h1>Todo List</h1>
        <table className='table'>
          <thead>
        <div className="filter">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        </div>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {currentTodo.map(todo => (
              <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <Pagination
          todoPerPage={todoPerPage}
          totalTodo={filteredTodo.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

const Pagination = ({ todoPerPage: todoPerPage, totalTodo: totalTodo, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalTodo / todoPerPage);
  const maxPagesToShow = 5; //.......................................................... Maximum number of page numbers to show

  //........................................................ Function to generate  page numbers centered around the current page
  const generatePageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else if (currentPage <= Math.floor(maxPagesToShow / 2)) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
      startPage = totalPages - maxPagesToShow + 1;
      endPage = totalPages;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  //............................................................................................. Handlers for navigation buttons
  const handleFirstPage = () => paginate(1);
  const handlePrevPage = () => paginate(Math.max(1, currentPage - 1));
  const handleNextPage = () => paginate(Math.min(totalPages, currentPage + 1));
  const handleLastPage = () => paginate(totalPages);

  return (
    <nav>
      <ul className='pagination'>
        <li className="page-item">
          <button onClick={handleFirstPage} className="page-link">
            First
          </button>
        </li>
        <li className="page-item">
          <button onClick={handlePrevPage} className="page-link">
            Previous
          </button>
        </li>
        {generatePageNumbers().map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button onClick={handleNextPage} className="page-link">
            Next
          </button>
        </li>
        <li className="page-item">
          <button onClick={handleLastPage} className="page-link">
            Last
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Page;
