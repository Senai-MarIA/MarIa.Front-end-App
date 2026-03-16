import MarIa_Logo from "../../../assets/img/MariaLogo.svg"
import downLoadIcon from "../../../assets/img/Frame.svg"
import  './style.css'

function Header() {
    return (
        <>
            <section className="Header_section">
                <img src={MarIa_Logo} />
                <ul>
                    <li>Funcionalidades</li>
                    <li>Busque por Cep</li>
                    <li>Mapa de Descarte</li>
                    <li>Missão MarIa</li>
                </ul>

                <button>Baixar App <img src={downLoadIcon} /></button>
            </section>
        </>
    )
}

export default Header;