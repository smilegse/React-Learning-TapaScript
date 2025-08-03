import CarDetails from "./CarDetails"
import PropTypes from 'prop-types'

function CarList () {

    const CARS = [
        { id: 1, title: "Luxury Sedan", brand: "Mercedes", year: 2023, price: 80000, isPremium: true },
        { id: 2, title: "Family SUV", brand: "Toyota", year: 2022, price: 45000, isPremium: false },
        { id: 3, title: "Sports Car", brand: "Porsche", year: 2023, price: 120000, isPremium: true },
        { id: 4, title: "Electric Hatchback", brand: "Nissan", year: 2022, price: 35000, isPremium: false },
        { id: 5, title: "Luxury SUV", brand: "BMW", year: 2023, price: 90000, isPremium: true },
    ];

    return (
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {
                CARS.map((car) => (                     
                    <CarDetails car={car} />
                ))
            }
        </div>
    )
}

CarDetails.propTypes = {
    car: PropTypes.shape({
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,        
    }).isRequired
};

export default CarList