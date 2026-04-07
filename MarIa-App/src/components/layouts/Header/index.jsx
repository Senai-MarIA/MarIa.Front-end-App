import MarIa_Logo from "../../../assets/img/MariaLogo.svg"
import downLoadIcon from "../../../assets/img/iconDownload.svg"
import { useState } from "react"
import  './style.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
        <section className="containerHeader">
            <article className="Header_section">
                
                <img src={MarIa_Logo} />
                
                <ul className={isMenuOpen ? "active" : ""}>
                    <li><a href="#InfoCards">Funcionalidades</a></li>
                    <li><a href="#BuscaCep">Busque por Cep</a></li>
                    <li><a href="#IdMap">Mapa de Descarte</a></li>
                    <li><a href="#IdGame">Missão MarIa</a></li>
                </ul>

                <button className="Download_Button">
                    <img src={downLoadIcon} />
                    Baixar App
                </button>
                <button className={`Menu_Toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
               
               
            </article>
            </section>
        </>
    )
}

export default Header;