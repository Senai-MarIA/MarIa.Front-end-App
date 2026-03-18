import MarIa_Logo from "../../../assets/img/MariaLogo.svg"
import downLoadIcon from "../../../assets/img/Frame.svg"
import  './style.css'

function Header() {
    return (
        <>
            <section className="Header_section">
                <img src={MarIa_Logo} />
                <ul>
                    <li><a href="">Funcionalidades</a></li>
                    <li><a href="">Busque por Cep</a></li>
                    <li><a href="">Mapa de Descarte</a></li>
                    <li><a href="">Missão MarIa</a></li>
                </ul>

                <button>Baixar App <img src={downLoadIcon} /></button>
            </section>
        </>
    )
}

export default Header;