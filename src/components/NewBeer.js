import axios from "axios";
import React, {useState} from "react";
import Header from "./Header";

function NewBeer() {
    const [newBeer, setNewBeer] = useState({})
    const [success, setSuccess] = useState(false)

    const onChange = event => {
        let object = {}
        object[event.target.id] = event.target.value
        setNewBeer({...newBeer, ...object})
       
    }

    const onSubmit = event => {
        event.preventDefault();
        axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer).then(
            response => {
                if (response.status === 200) {
                    setSuccess(true)
                }
            }
            
            ).catch(error => console.log(error))

    }

    return (
        <div>
            <Header/>
            {success &&
                <div className = "alert alert-success" role="alert">
                    <h4 class="alert-heading">Beer Added</h4>
                    <p>You've succesfully added a new beer to the database!</p>
                </div>
            
            }
            <form className="row d-flex justify-content-center" onSubmit={onSubmit}>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="name"> Name </label>
                    <input className="form-control" type="text" id="name" required onChange={onChange}/>
                </div>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="tagline"> Tagline </label>
                    <input className="form-control" type="text" id="tagline" required onChange={onChange} />
                </div>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="description"> Description </label>
                    <textarea className="form-control" type="text" id="description" required onChange={onChange}/>
                </div>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="first_brewed"> First Brewed </label>
                    <input className="form-control" type="text" id="first_brewed" required onChange={onChange}/>
                </div>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="brewers_tips"> Brewers Tips </label>
                    <input className="form-control" type="text" id="brewers_tips" required onChange={onChange}/>
                </div>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="attenuation_level"> Attenuation Level </label>
                    <input className="form-control" type="number" id="attenuation_level" required onChange={onChange}/>
                </div>
                <div className="col-8 form-group align-middle mb-2">
                    <label htmlFor="contributed_by"> Contributed By </label>
                    <input className="form-control" type="text" id="contributed_by" required onChange={onChange}/>
                </div>
                <button type="submit" className="col-8 btn btn-primary">Add New</button>
            </form>
        </div>
    )
}

export default NewBeer