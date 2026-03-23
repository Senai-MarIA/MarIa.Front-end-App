import  './style.css'
import MarIAWithItems from "../../../assets/img/MarIAwithItems.svg"
import LogoTipoGame from "../../../assets/img/LogoTipoGame.svg"
function SectionGame() {
    return (
        <section className="sectiongame">
          <div className="GroupContentGame">
            <h2>Missão</h2>
            <p>Torne-se um Herói da Natureza!</p>
            <p>Aprender a reciclar nunca foi tão divertido. Ajude nossa coruja mascote, a MarIA, a colocar todo o lixo nas lixeiras corretas e ganhe pontos ecológicos. Um jogo perfeito para ensinar as crianças sobre sustentabilidade.</p>
            <img src={LogoTipoGame} alt="" />
            <button><img src={LogoTipoGame} alt="" />Jogue Agora</button>
          </div>
          <div className="GroupImageGame">
            <img src={MarIAWithItems} alt="" />
          </div>
        </section>
    );
}

export default SectionGame;