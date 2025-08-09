import CarDetails from "./CarDetails"
import PropTypes from 'prop-types'

function CarList ({cars,searchTerm,isCheckedPremium}) {
    const rows = [];
    cars.forEach((car) => {
        

        if(car.title.toLowerCase().indexOf(searchTerm.toLowerCase())===-1){
            return;
        }
        rows.push(<CarDetails key={car.id} car={car} />)
    })

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {
                rows
            }
        </div>
    )
}

CarDetails.propTypes = {
    car: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,        
    }).isRequired,
    searchTerm: PropTypes.string.isRequired,
    isCheckedPremium: PropTypes.bool.isRequired,
};

export default CarList