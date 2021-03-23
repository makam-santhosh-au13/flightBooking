import React from 'react';
import {Link} from 'react-router-dom';
import defaultImg from '../images/default.jpeg';
import PropTypes from 'prop-types';

export default function Flight({flight}) {
    const { name , slug, images, price } = flight;
    return (
        <div className="col-md-4 col-12 mx-auto p-2">
            <div className="card shadow-lg border-0 flight">
                <img src={images[0] || defaultImg} alt="single flight" className="img-fluid"/>
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>per Ride</p>
                </div>
                <Link to={`/flights/${slug}`} className="btn-warning flight-link text-center" >Features</Link>
              <p className="flight-info">{name}</p>
            </div>
        </div>
    )
}

Flight.propTypes = {
    Flight: PropTypes.shape({
        name:PropTypes.string.isRequired,
        slug:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired,
    })
}