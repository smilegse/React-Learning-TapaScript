import BookRow from "./BookRow"

const BooksData = [
    {
        id: 1,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        featured: false,
    },
    {
        id: 2,
        title: 'Things Fall Apart',
        author: 'Chinua Achebe',
        featured: false,
    },
    {
        id: 3,
        title: 'Fairy tales',
        author: 'Hans Christian Andersen',
        featured: false,
    },
    {
        id: 4,
        title: 'The Divine Comedy',
        author: 'Dante Alighieri',
        featured: false,
    },
    {
        id: 5,
        title: '1984',
        author: 'George Orwell',
        featured: false,
    },
    {
        id: 6,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        featured: false,
    }
]

function BookList () {
  return (
    <>
        <ul>
            {
                BooksData.map((book) => {
                    <li key={book.id}>
                        <BookRow book={book} />
                    </li>
                })
            }
             {/* <li key={1}>
                        <BookRow title='siddique' />
            </li> */}
        </ul>
    </>
  )
}

export default BookList