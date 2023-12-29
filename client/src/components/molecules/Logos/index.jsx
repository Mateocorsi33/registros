import Glp from "../../atoms/logo/glp";
import Logo from "../../atoms/logo/logo";

export default function Logos (){
    return(
        <div className="flex flex-row justify-between items-center">
            <Glp/>
            <Logo/>
        </div>
    )
}