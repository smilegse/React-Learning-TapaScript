import BookRow from "./BookRow"

function BookList () {

    const BOOKS = [
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
    ];

  return (
    <>
        <ul className="space-y-4">
            {
                BOOKS.map((book,index) => (                    
                    <li key={index} className="flex item-center justify-between p-4 
                    bg-white shadow rounded-lg">
                        <BookRow book={book} />
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default BookList