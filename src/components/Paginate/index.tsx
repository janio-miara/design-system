import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ReactPaginate from 'react-paginate'
import { Container } from './styles'

export type PropsPaginate = {
  startPage: number
  changePage: any
  pageCount: number
}

const Paginate = ({ startPage, changePage = () => null, pageCount }: PropsPaginate) => {
  return (
    <Container>
      <ReactPaginate
        forcePage={startPage - 1}
        initialPage={startPage - 1}
        previousLabel={<FiChevronLeft size="18px" />}
        nextLabel={<FiChevronRight size="18px" />}
        pageCount={pageCount}
        onPageChange={({ selected }) => changePage(selected + 1)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
      />
    </Container>
  )
}

export default Paginate
