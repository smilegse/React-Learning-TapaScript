import PropTypes from 'prop-types'

function CarDetails({car}) {
  return (    
    <div className="bg-gray-100 border border-gray-300 shadow-lg rounded-lg p-4">                 
        <h2 className='text-lg font-semibold'>Title: {car.title}</h2>
        <p><span className='font-semibold'> Brand: </span> {car.brand}</p>
        <p><span className='font-semibold'> Year: </span> {car.year}</p>
        <p><span className='font-semibold'> Price: </span> ${car.price}</p>
        <p> 
          <span className='font-semibold'> Premium: </span> 
            {car.isPremium?'Yes': 'No'}
        </p>
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
};

export default CarDetails