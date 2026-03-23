import iconmap from "../../../assets/img/Map.svg"
import SearchIcon from "../../../assets/img/SearchIcon.svg"
import caminhaoIcon from "../../../assets/img/caminhao.svg"
import iconOrangeCaminhao from "../../../assets/img/iconOrangeCaminhao.svg"
import IconEnergy from "../../../assets/img/IconEnergy.svg"
import "./style.css"
export default function SectionMap() {
    return (
        <section className="section-map">
            <div className="group1map">
               
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4162.476370376381!2d-46.47681158860001!3d-23.545262378722455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce66dec98fb855%3A0xf2b061ffbcd2ecf8!2sNeo%20Qu%C3%ADmica%20Arena!5e1!3m2!1spt-BR!2sbr!4v1774220575295!5m2!1spt-BR!2sbr" width="584" height="736"  allowfullscreen="" loading="lazy"></iframe>
            
            <div className="complementationMap">
                <div className="iconCompletationMap">
                <span><img src={iconOrangeCaminhao} alt="" />Cata-Bagulho</span>
                <span><img src={IconEnergy} alt="" />Lixo Eletrônico</span>
                </div>
                <h3>Endereço:</h3>
                <p className="local">Estádio do cortinas melhor time do brasil</p>
                <p className="Bairro-cidade">Itaquera, São Paulo</p>
            </div>
            </div>
            <div className="group2map">
                <span><img src={iconmap} alt="" />  Mapa Interativo</span>
                <h2>Descubra onde descartar o que não vai no lixo comum.</h2>
                <p>Lixo eletrônico, pilhas, óleo de cozinha e móveis velhos exigem descarte adequado. Nosso mapa interativo mostra os ecopontos e locais de coleta mais próximos de você.
            </p>

            <div className="messages-container">
                <div className="messageMap">
                    <img src={caminhaoIcon} alt="" />
                    <p>Encontre Ecopontos oficiais da prefeitura</p>
                </div>
                <div className="messageMap2">
                    <img src={SearchIcon} alt="" />
                    <p>Saiba onde o Cata-bagulho está atuando</p>
                </div>
            </div>


            </div>
        </section>
    );
}