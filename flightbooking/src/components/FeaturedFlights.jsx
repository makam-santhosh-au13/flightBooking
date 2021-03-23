import React, { Component } from 'react'
import { FlightContext } from '../context'
import Loading from './Loading';
import Flight from './Flight';
import Title from './Title'; 

export default class FeaturedFlights  extends Component {
    static contextType = FlightContext;
    render() {
        let { loading, featuredflights : flights } = this.context;
        console.log(flights);
        flights = flights.map((flight) => {
            return <Flight key={flight.id} flight={flight}/>
        });
        return (
 
            <section className="featured-flightscontainer">
                <Title  title="Featured flights" />
                <div className="row">
                  {loading ? <Loading/> : flights}
                </div>
            </section>
        )
    }
}
