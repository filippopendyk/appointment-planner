import React from "react";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Navbar = () => {

    return (
        <nav>
            <NavLink to="contacts"> Contacts </NavLink>
            <NavLink to="appointments"> Appointments </NavLink>
        </nav>
    )

}

export default Navbar;
