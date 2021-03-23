import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import FlightsContainer from '../components/FlightsContainer';
const Flights = () => {
    return (
    <div>
        <Hero hero="flightsHero">
        </Hero>
        <Banner title="Available Flights" subtitle="Best in Class Flight">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner>
        <FlightsContainer/>
    </div>
    )
}

export default Flights
