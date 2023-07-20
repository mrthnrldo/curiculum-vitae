import gambar1 from '../media/html.png'
import gambar2 from '../media/css.png'
import gambar3 from '../media/js.png'
import gambar4 from '../media/react.png'

export default function TechStack (){
    return(
        <div className="contTechStack">
            <h3>Tech Stack </h3>
            <p>|</p> 
            <div className="iconTechStack">
                <img src={gambar1} alt="gambar1"/>
                <img src={gambar2} alt="gambar2"/>
                <img src={gambar3} alt="gambar3"/>
                <img src={gambar4} alt="gambar4"/>
            </div>
        </div>
    )
}