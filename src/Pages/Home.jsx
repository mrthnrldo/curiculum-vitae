import Navbar from "../component/Navbar";
import {useNavigate} from "react-router-dom" 
import Introduction from "../component/introduction";
import TechStack from "../component/techStack";
import Profile from "../component/profile";
import Portofolio from "../component/portofolio";
import Kontak from "../component/kontak";


export default function Home (){

    const navigate = useNavigate()
    return(
        <div className="palingLuar">
            <Navbar/>
            <div className="container" id="Home">
                <Introduction/>
                <TechStack/>
                <Profile/>
                <Portofolio/>
                <Kontak/>
            </div>
        </div>
    );
}