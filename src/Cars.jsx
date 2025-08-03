import BookList from "./BookList";
import Header from "./Header";
import Search from "./Search";

export default function Cars() {
  return (
    <div className="mx-auto p-4">
        <Header/>
        <Search/>
        <BookList/>
    </div>
  )
}
