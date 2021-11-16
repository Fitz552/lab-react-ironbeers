import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import Header from "./Header";


function Beer() {
    const {id_} = useParams();
    const [beerInfo, setBeerInfo] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id_}`)
        .then(
            response => {
                let data=response.data
                return data
            }
        ).then(
            data => {
            setBeerInfo(data)
            setLoaded(true)
            console.log(data)
            }
        )
    }, [id_])

    return (
        <div>
            <Header/>
            {loaded &&
            <div className="m-2">
                <div className="text-center mb-2">
                    <img style={{height:"200px", width:"auto"}} src={beerInfo.image_url} alt={beerInfo.name}/>
                </div>
                <div className="row d-flex justify-content-center">
                        <p className="col col-md-4 col-sm-6 h4 text-dark">{beerInfo.name}</p>
                        <p className="col col-md-4 col-sm-6 d-flex justify-content-end h4 text-secondary ">{beerInfo.attenuation_level}</p>
                </div>
                <div className="row d-flex justify-content-center align-middle">
                    <p className="col col-md-4 col-sm-6 h6 text-secondary">{beerInfo.tagline}</p>
                    <p className="col col-md-4 col-sm-6 d-flex justify-content-end small"><strong>{beerInfo.first_brewed}</strong></p>
                </div>
                <div className="row d-flex justify-content-center align-middle">
                    <p className="col col-md-8 col-sm-12 ">
                        {beerInfo.description}
                    </p>
                </div>
                <div className="row d-flex justify-content-center align-middle">
                    <p className="col col-md-8 col-sm-12 text-secondary">
                    <small> <strong>
                        {beerInfo.contributed_by}
                    </strong></small>
                    </p>
                </div>
            </div>
            }
        </div>
    )
}

export default Beer