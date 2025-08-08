import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";

import { useState } from "react";

export default function Boimela() {

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

  const [books, setBooks] = useState(BOOKS)
  const [searchTerm, setSearchTerm]= useState("")
  
  // generate a function to pass as props
  // to update particular book is feature or not using setState()
  const toggleFeatured = (id) =>{
    setBooks(
      books.map((book)=> 
        book.id === id ? {...book, featured: !book.featured}:book
      )
    );
  }

  console.log(books)

  return (
    <div className="mx-auto p-4">
        <Header/>
        <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
        <BookList searchTerm={searchTerm} books={books} onFeatureBook={toggleFeatured}/>
    </div>
  )
}
