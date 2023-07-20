import {Link} from "react-scroll"


export default function Navbar (){
    return(
        <div className="nav">
            <div className="navLeft">
                <h3><a href="/">mar-cv</a></h3> 
            </div>
            <div className="navRight">
                <ul>
                    <li><Link activeClass="active" to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                    <li><Link activeClass="active" to="About" spy={true} smooth={true} offset={-100} duration={500}>About</Link></li>
                    <li><Link activeClass="active" to="Project" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link></li>
                    <li><Link activeClass="active" to="Kontak" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link></li>
                </ul>
            </div>
            
        </div>
    )
}