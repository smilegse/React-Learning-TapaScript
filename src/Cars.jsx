import CarList from "./CarList";
import Header from "./Header";
import Search from "./Search";

export default function Cars() {
  return (
    <div className="mx-auto p-4">
        <Header/>
        <Search/>
        <CarList/>
    </div>
  )
}
