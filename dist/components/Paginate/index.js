import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ReactPaginate from 'react-paginate';
import { Container } from './styles';
const Paginate = ({ startPage, changePage = () => null, pageCount }) => {
    return (React.createElement(Container, null,
        React.createElement(ReactPaginate, { forcePage: startPage - 1, initialPage: startPage - 1, previousLabel: React.createElement(FiChevronLeft, { size: "18px" }), nextLabel: React.createElement(FiChevronRight, { size: "18px" }), pageCount: pageCount, onPageChange: ({ selected }) => changePage(selected + 1), marginPagesDisplayed: 2, pageRangeDisplayed: 5 })));
};
export default Paginate;
//# sourceMappingURL=index.js.map