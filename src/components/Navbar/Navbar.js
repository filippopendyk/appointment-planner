import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    let activeStyle = {
        textDecoration: "underline",
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="contacts"
                        style={({ isActive}) => 
                            isActive ? activeStyle : undefined
                        }
                        >
                        Contacts
                        </NavLink>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;
