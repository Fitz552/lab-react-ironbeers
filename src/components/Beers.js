import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";


function Beers() {
    const [beers, setBeers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [filter, setFilter] = useState("")

    useEffect( () => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers${filter}`)
        .then( response => {
            let data = response.data
            return data 
        }
        ).then ( response => {
            setBeers(response)
            console.log(response)
        }
        ).then(
            setLoaded(true)
        )
    }, [filter])

    const onChange = event => {
        if (event.target.value !== "") {
            setFilter(`/search?q=${event.target.value}`)
        }
        else (
            setFilter("")
        )
    }


    return (
        <div>
            <Header/>
            <div className="d-flex justify-content-center">
                <input className="m-2 col col-8 align-middle" type="text" onChange={onChange}/>
            </div>
            {
                loaded &&
                <div className="m-2">
                    {beers.map(beer => {
                        return (      
                                <Link to={`/beers/${beer._id}`} className="row m-2" key={beer._id} style={{ textDecoration: 'none' }} >
                                    <div className="col-3 text-center">
                                        <img className="img-responsive align-middle" style={{height: "150px", width:"auto"}} src={beer.image_url} alt={beer.name}/>
                                    </div>
                                    <div className="col align-middle">
                                        <p className="h3 text-dark">{beer.name}</p>
                                        <p className="h6 text-secondary">{beer.tagline}</p>
                                        <p className="text-dark"><small><strong>created by:</strong> {beer.contributed_by}</small></p>
                                    </div>
                                
                                <hr className="mt-2"/>
                                </Link>
                            
                        )
                    }

                    )}
                </div>
            }
        </div>
    )
}

export default Beers