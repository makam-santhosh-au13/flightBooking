import React from 'react'
import FlightsFilter from './FlightsFilter';
import FlightsList from './FlightsList';
import { withFlightConsumer } from '../context';
import Loading from './Loading';

function FlightsContainer({context}){
    const{loading,sortedFlights,flights} = context;
    if(loading)
    {
        return <Loading/>;
    }
    return(
        <>
            <FlightsFilter flights={flights}/>
            <FlightsList flights = {sortedFlights}/>
        </>
    );

}
export default withFlightConsumer(FlightsContainer)
