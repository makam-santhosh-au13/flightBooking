import React, { Component } from 'react'
import items from './data';
const FlightContext = React.createContext();


export default class FlightProvider extends Component {
    state={
        flights: [],
        sortedFlights: [],
        featuredFlights: [],
        loading: true,
        type: 'all',
        capacity: 100,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    };
    componentDidMount(){
        let flights = this.formatData(items);
        let featuredFlights = flights.filter(flight => flight.featured === true);
        let maxPrice = Math.max(...flights.map(item => item.price));
        let maxSize = Math.max(...flights.map(item => item.size));
        this.setState({
            flights,
            featuredFlights,
            sortedFlights:flights,
            loading: false,
            price : maxPrice,
            maxPrice,
            maxSize
        })
    }
    formatData(items){
        let tempItems = items.map(item =>{
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
        let flight = {...item.fields,images,id}
        return flight;    
        });
        return tempItems;
    }
    getFlight = (slug) => {
        let tempFlights = [...this.state.flights];
        const flight = tempFlights.find((flight)=>flight.slug === slug);
        return flight;
    }
    handleChange = event => {
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked:target.value;
        const name = event.target.name;
        this.setState(
        {
            [name]: value
        },this.filterFlights)
    }
    filterFlights = () => {
        let{
            flights,type,capacity,price,minSize,maxSize,breakfast,pets
        }= this.state
        // for all the flights
        let tempFlights = [...flights];

        //transform value
        capacity = parseInt(capacity)
        price = parseInt(price)

        //filter by type
        if(type !=='all'){
            tempFlights = tempFlights.filter(flight => flight.type === type)
        }
        //filter by capacity
        if(capacity !==1){
            tempFlights = tempFlights.filter(flight => flight.capacity >= capacity)
        }
        //filter by price
        tempFlights = tempFlights.filter(flight => flight.price <= price);
        
        //filter by size
        tempFlights = tempFlights.filter(flight => flight.size >= minSize && flight.size <= maxSize)

        //filter by breakfast
        if(breakfast){
            tempFlights = tempFlights.filter(flight => flight.breakfast === true)
        }
        //filter by pets
        if(pets){
            tempFlights = tempFlights.filter(flight => flight.pets === true)
        }
        //change state
        this.setState({
            sortedFlights: tempFlights
        })
    }
    render() {
        return (
            <FlightContext.Provider value={{ ...this.state, getFlight: this.getFlight ,handleChange: this.handleChange }}>
                {this.props.children}
            </FlightContext.Provider>
        )
    }
}
const FlightConsumer = FlightContext.Consumer;

export function withFlightConsumer(Component){
    return function ConsumerWrapper(props){
        return <FlightConsumer>
            {value => <Component {...props} context={value} />}
        </FlightConsumer>
    }
}

export{FlightProvider,FlightConsumer,FlightContext}
     