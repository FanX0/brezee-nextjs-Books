import React from 'react'
import PropTypes from 'prop-types'

const ListBook = props => {
  return books.map(book => (
        <p key={book.id}>
            {book.id} | {book.name}

        </p>
    ))
}

ListBook.propTypes = {}

export default ListBook