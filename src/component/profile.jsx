import gambar1 from "../media/aboutme.jpg"

export default function Profile() {
    return(
        <div className="profile">
            <div className="profilePic">
                <img src={gambar1} alt="gambar1" />
            </div>
            <div className="profileText" id="About">
                <h3>PROFILE</h3>
                <h2>Marthin Riyaldo Solini Kese🧑🏾‍🦱 </h2>
                <p>Mahasiswa semester 3, program pendidikan Informatika,  Universitas Multimedia 
                Nusantara. Mempunyai minat dalam pengembangan web terutama pada bagian Front-end Development.
                Memiliki kemampuan dalam menjalankan 4 bahasa pemrograman yaitu HTML, CSS, JavaScript dan React.  
                Aktif mencari peluang untuk mengembangkan diri di bidang IT.</p>
            </div>
        </div>
    )
}