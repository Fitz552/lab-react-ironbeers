import React from "react";
import {Link} from "react-router-dom"
import beersImage from "../assets/beers.png"
import randomBeerImage from "../assets/random-beer.png"
import newBeerImage from "../assets/new-beer.png"

function Home() {
    return (
        <div>
            <div className = "m-2">
                <Link className="nav-link text-secondary" to = "/beers">
                    <img className="col-12 img-fluid" src={beersImage} alt="Beer bar" style={{maxHeight:"400px"}}/>
                    <p className="h3">All Beers</p>
                    <p>Listing of all beers there are. Culpa eiusmod id sunt ullamco sit voluptate occaecat mollit ad.
                    Magna esse ex dolore id velit et non irure dolore.
                    </p>
                </Link>
            </div>
            <div className = "m-2">
                <Link className="nav-link text-secondary" to = "/random-beer">
                    <img className="col-12 img-fluid" src={randomBeerImage} alt="Beer taps" style={{maxHeight:"400px"}}/>
                    <p className="h3">Random Beer</p>
                    <p>Surprise me with a random beer. Velit duis ullamco incididunt aute dolore officia aute laboris sint ipsum occaecat.
                    Sunt ad eu exercitation exercitation dolor ex labore.
                    </p>
                </Link>
            </div>
            <div className = "m-2">
                <Link className="nav-link text-secondary" to = "/new-beer">
                    <img className="col-12 img-fluid" src={newBeerImage} alt="Beer bottle and glass" style={{maxHeight:"400px"}}/>
                    <p className="h3">New Beer</p>
                    <p>Add a new beer. Aliquip ullamco consequat anim duis.
                    Ut aliqua proident veniam deserunt commodo eiusmod aute anim veniam aute anim.
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Home