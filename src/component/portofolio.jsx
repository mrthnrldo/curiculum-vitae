import gambar1 from "../media/projek1.png"
import gambar2 from "../media/projek2.png"

export default function Portofolio(){

    return(
        <div className="portofolio" id="Project">
            <h3>PORTOFOLIO</h3>
            <h2>Projek kelompok untuk memenuhi UTS & UAS</h2>
            <div className="mainPortofolio">
                <div className="portofolioPic">
                    <img src={gambar1} alt="gambar1" />
                </div>
                <div className="portofolioText">
                    <h3>GENSHINFO</h3>
                    <p>GenshInfo merupakan website pusat informasi
                    sekaligus hiburan bagi para pemain Genshin Impact maupun orang yangtidak bermain Genshin Impact. 
                    Dalam website GenshInfo ini, kalian bisamencari informasi dari tiap karakter, berita dan masih banyak lagi mengenai
                    Genshin Impact itu sendiri.</p>
                    <div className="code">
                        <h3><a href="https://genshinfo.vercel.app" target="_blank">LIVE DEMO</a></h3>
                        <h3><a href="https://github.com/mrthnrldo/GenshInfo" target="_blank">SOURCE CODE</a></h3>
                    </div>
                </div>
            </div>
            <div className="mainPortofolio">
                <div className="portofolioText">
                    <h3>THEBADDESTDUCK [LOCALHOST]</h3>
                    <p>The Baddest Duck merupakan permainan simulasi kehidupan hewan piaraan, yang diawali dengan memilih
                    avatar hewan </p>
                    <div className="code">
                        <h3><a href="https://github.com/mrthnrldo/theBaddestDck" target="_blank">SOURCE CODE</a></h3>
                    </div>
                </div>
                <div className="portofolioPic">
                    <img src={gambar2} alt="gambar2" />
                </div>
            </div>
            
        </div>
    )
        
}