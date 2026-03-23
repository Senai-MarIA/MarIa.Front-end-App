import  './style.css'
import MarIAWithItems from "../../../assets/img/MarIAwithItems.svg"
import LogoTipoGame from "../../../assets/img/LogoTipoGame.svg"
import IconControl from "../../../assets/img/IconControl.svg"
function SectionGame() {
    return (
        <section className="sectiongame">
          <div className="GroupContentGame">
            <div className="groupmission">
            <h2>Missão</h2>
            <img src={LogoTipoGame} alt="" />
            </div>

            
            <p className="PHero">Torne-se um Herói da Natureza!</p>
            <p>Aprender a reciclar nunca foi tão divertido. Ajude nossa coruja mascote, a MarIA, a colocar todo o lixo nas lixeiras corretas e ganhe pontos ecológicos. Um jogo perfeito para ensinar as crianças sobre sustentabilidade.</p>
            <button><img src={IconControl} alt="" />Jogue Agora</button>
          </div>
          <div className="GroupImageGame">
            <img src={MarIAWithItems} alt="" />
          </div>
        </section>
    );
}

export default SectionGame;