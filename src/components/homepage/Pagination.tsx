import React from 'react'

type Props = {
  handlePageChange: (pageNumber:Number) => void;
}

function Pagination({handlePageChange}: Props) {
  return (
    <div>Pagination</div>
  )
}

export default Pagination