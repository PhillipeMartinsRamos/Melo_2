import "./Banner.css"

import video from "../../assets/video.mp4"

const Banner = () => {
  return (
    <section className="banner">
        <div className="banner-text-container">
            <h2 className="banner-title">
                DOMINE O
                <br/>
                FLUXO
            </h2>
            <p className="banner-text">
            Soluções de Gestão de Tráfego para alavancar seu sucesso online.
            </p>
        </div>
        <video autoPlay muted loop className="banner-video">
            <source src={video}/>
        </video>
        <button className="btn-teste">Clique aqui</button>
    </section>
  )
}

export default Banner