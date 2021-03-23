import React, { Component } from 'react'
import defaultBcg from '../images/flight-5.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { FlightContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class SingleFlight extends Component {
    constructor (props){
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = FlightContext;
    render() {
        const { getFlight } = this.context;
        const flight = getFlight(this.state.slug);
        if(!flight){
            return (<div className="container flighterror">
                    <div className="row my-5">
                        <div className="col-md-6 col-12 mx-auto">
                            <div className="card shadow-lg border-0 p-4 error">
                                <h1 className="text-center display-4">SORRY</h1>
                                <h3>No such flight could be found...</h3>
                                <Link to="/flights" className="btn btn-warning mt-4 ">Back to Flights</Link>
                            </div> 
                        </div>
                    </div>
                </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = flight;
        const [mainImg, ...defaultBcg] = images;
        return (
            <>
            <StyledHero img={mainImg || this.state.defaultBcg }>
           
            <Banner title={`${name} flight`}>
                    <Link to="/flights" className="btn btn-primary">Back To Flights</Link>
            </Banner>
            </StyledHero>
            <section className="single-flight container">
               <div className="row">
                    {defaultBcg.map((item,index) => {
                        return (
                        <div className="col-md-4 col-12 mx-auto" key={index}>
                            <div className="card border-0 shadow-lg">
                               <img key={index} src={item} alt={name} className="img-fluid" />
                            </div>
                        </div>)
                    })}
               </div>
               <div className="single-flight-info">
                   <article className="desc">
                      <h3>Details</h3>
                      <p>{description}</p>
                   </article>
                   <article className="info">
                      <h3>Info</h3>
                      <h6>price : ${price}</h6>
                      <h6>size  : {size} SQFT</h6>
                      <h6>
                          max capacity : {" "}
                              {capacity > 1 ? `${capacity} people`: `${capacity} person`}
                      </h6>
                      <h6>{pets? 'pets allowed': 'no pets allowed'}</h6>
                      <h6>{breakfast && "free breakfast included"}</h6>
                   </article>
               </div>
            </section>
            <section className="flight-extras">
                <h3>Extras</h3>
                <ul className="extras">
                    {extras.map((item,index) => {
                          return <li key={index}>{item}</li>
                    })}
                </ul>
                <div className="p-4 clearfix">
                    <div className="row">
                       <div className="col-md-3 col-12 ml-auto">
                          <Link to={`/booknow/${this.state.slug}`} className="btn btn-outline-primary btn-block btn-lg float-right ">Book Now</Link>
                       </div>
                    </div>
                </div>
            </section>
            </>
        )
    }
}
