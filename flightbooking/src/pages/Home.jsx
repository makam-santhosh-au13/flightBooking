import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedFlights from '../components/FeaturedFlights';

export default function Home() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner title="Luxurious flights" subtitle="domestic flights starting at 300$">
                <Link to="/flights" className="btn btn-primary">
                      Our Flights
                </Link>
        </Banner>
        <Services/> 
        <FeaturedFlights/>
        </>

    )
}
