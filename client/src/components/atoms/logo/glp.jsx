import { NavLink } from "react-router-dom";
import glp from "../../../assets/granjalospibes.png";

export default function Glp () {
    return(
        <NavLink to="/home">
            <img className="w-20" src={glp} alt="logo - GranjaLosPibes"/>
        </NavLink>
    )
}