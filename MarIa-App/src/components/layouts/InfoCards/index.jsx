import "./style.css";
import Cards from "../../Cards";

import Lixeira from "../../../assets/img/Lixeira.svg";
import Reciclavel from "../../../assets/img/Reciclavel.svg";
import caminhao from "../../../assets/img/caminhao.svg";
import Map from "../../../assets/img/Map.svg";
function InfoCards() {
    return (
        <section className="info-cards-section" id="InfoCards">
            <div className="textup-cards">
                <h2>Tudo o que você precisa em um só lugar</h2>
                <p>Gerencie o descarte do seu lixo de forma consciente e organizada, ajudando a sua cidade e o meio ambiente.</p>
            </div>
            <div className="containerCards">
            <Cards icon1={Lixeira} icon2={Reciclavel} title="Coleta Comum e Seletiva" description="Saiba exatamente os dias e horários que os caminhões passam na sua rua. Diferencie os horários do lixo comum e reciclável facilmente." />
            <Cards icon1={caminhao} title="Operação Cata-bagulho" description="Precisa descartar móveis velhos ou objetos grandes? Fique sabendo quando a operação passará no seu bairro ou agende uma retirada." />
            <Cards icon1={Map}  title="Mapa em tempo real" description="Acompanhe o Cata-Bagulho ao vivo pelo mapa e descarte seus itens no momento exato da coleta." />
            </div>
        </section>
    );
}

export default InfoCards;