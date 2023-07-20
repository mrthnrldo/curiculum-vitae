import gambar1 from '../media/profilefix.jpg'
import gambar2 from '../media/github-mark.png'
import gambar3 from '../media/LI-In-Bug.png'

export default function Introduction () {
    return (
        <div className="introduction">
            <div className="text">
                <h1>Mahasiswa Teknik Informatika🧑🏾‍💻</h1>
                <p>Hello there! Saya Mahasiswa aktif Teknik Informatika Universitas Multimedia Nusantara yang berdomisili di Tangerang, Indonesia📍</p>
                <a href="https://github.com/mrthnrldo" target='_blank'><img src={gambar2} alt="gambar2"/></a>
                <img src={gambar3} alt="gambar3" />
            </div>
            <div className="img">
                <img src={gambar1} alt="gambar1" />
            </div>
        </div>
    )
}