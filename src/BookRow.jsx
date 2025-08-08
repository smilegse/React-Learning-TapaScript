import BookDetails from './BookDetails'
import FeatureBook from './FeatureBook'
import PropTypes from 'prop-types'

function BookRow({book, onFeatureBook}) {
  return (    
    <div className='flex item-center justify-between p-4 bg-white shadow-lg rounded-lg'>
        <BookDetails title={book.title} author={book.author} />
        <FeatureBook book={book} onFeatureBook={onFeatureBook}/>
    </div>
  )
}

BookRow.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }).isRequired
};

export default BookRow