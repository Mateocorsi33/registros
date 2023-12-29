import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png"

export default function Logo () {
    return(
        <NavLink to="/home">
            <img className="w-14 h-14" src={logo} alt="Logo - Granja Los Pibes"/>
        </NavLink>
    )
}