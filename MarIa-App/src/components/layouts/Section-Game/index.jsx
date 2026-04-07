import  './style.css'
import MarIAWithItems from "../../../assets/img/MarIAwithItems.svg"
import LogoTipoGame from "../../../assets/img/LogoTipoGame.svg"
import IconControl from "../../../assets/img/IconControl.svg"
function SectionGame() {
    return (
        <section className="sectiongame" id='IdGame'>
          <div className="GroupContentGame">
            <div className="groupmission">
            <h2>Missão</h2>
            <img src={LogoTipoGame} alt="" />
            </div>

            
            <p className="PHero">Torne-se um Herói da Natureza!</p>
            <p className="DescriptionGame">Aprender a reciclar nunca foi tão divertido. Ajude nossa coruja mascote, a MarIA, a colocar todo o lixo nas lixeiras corretas e ganhe pontos ecológicos. Um jogo perfeito para ensinar as crianças sobre sustentabilidade.</p>
            <button><img src={IconControl} alt="" /><a href="https://maria-project-delta.vercel.app/">Jogue Agora</a></button>
          </div>
          <div className="GroupImageGame">
            <img src={MarIAWithItems} alt="" />
          </div>
          <svg className="Waveone" width="1280" height="116" viewBox="0 0 1280 116" fill="none" xmlns="http://www.w3.org/2000/svg"         preserveAspectRatio="none"
>
<path d="M436 112.5C436 112.5 12.081 115.791 -17.9289 115.791C-47.9388 115.791 254.161 0.755739 499.659 0.232461C745.157 -0.290816 1280 0.232461 1280 0.232461C1280 0.232461 1213.13 38.2066 897.699 84.3196C582.269 130.433 436 112.5 436 112.5Z" fill="#B742FF"/>

</svg>

<svg className="Wavetwo" width="696" height="197" viewBox="0 0 696 197" fill="none" xmlns="http://www.w3.org/2000/svg"         preserveAspectRatio="none"
>
<path d="M706.268 0L730 197H0C0 197 57.3987 126.5 357.638 98C657.877 69.5 706.268 0 706.268 0Z" fill="#A21EF4"/>
</svg>


        </section>
    );
}

export default SectionGame;