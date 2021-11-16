import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div className="m-2">
            <Link className="nav-link text-white" to = "/">
                <div className="bg-primary text-center">
                    <i className="fa fa-home"></i>
                </div>
            </Link>
        </div>
    )
}

export default Header