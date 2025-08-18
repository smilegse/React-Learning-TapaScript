import CarDetails from "./CarDetails"
import PropTypes from 'prop-types'

function CarList ({cars,searchTerm,isPremiumOnly}) {
        
    const filteredCars = cars.filter(car => {
        if (isPremiumOnly && !car.isPremium) return false;
        return car.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {filteredCars.map(car => (
                <CarDetails key={car.id} car={car} />
            ))}
        </div>
    )
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  isPremiumOnly: PropTypes.bool.isRequired,
};

export default CarList