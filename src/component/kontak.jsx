import gambar1 from "../media/mail.png"
export default function Kontak (){

    return(
        <div className="kontak" id="Kontak">
            <h3>KONTAK</h3>
            <h2>Please kindly hit me up! </h2>
            <div className="mail">
                <img src={gambar1} alt="gambar1" />
                <p>marthin.riyaldo@student.umn.ac.id</p>
            </div>
        </div>
    )
}