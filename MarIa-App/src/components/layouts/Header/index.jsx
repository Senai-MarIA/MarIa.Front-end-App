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
                
               
                <button className="Download_Button">
                    <img src={downLoadIcon} />
                    Baixar App
                </button>
                  <div className="organizatorHeader"> 
                <button className={`Menu_Toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
               
                <ul className={isMenuOpen ? "active" : ""}>
                    <li><a href="">Funcionalidades</a></li>
                    <li><a href="">Busque por Cep</a></li>
                    <li><a href="">Mapa de Descarte</a></li>
                    <li><a href="">Missão MarIa</a></li>
                </ul>
                </div>
            </article>
            </section>
        </>
    )
}

export default Header;