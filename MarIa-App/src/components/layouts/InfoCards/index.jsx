import "./style.css";
import Cards from "../../Cards";

import Lixeira from "../../../assets/img/Lixeira.svg";
import Reciclavel from "../../../assets/img/Reciclavel.svg";
import caminhao from "../../../assets/img/caminhao.svg";
import Map from "../../../assets/img/Map.svg";
function InfoCards() {
    return (
        <section className="info-cards-section">
            <div className="textup-cards">
                <h2>Tudo o que você precisa em um só lugar</h2>
                <p>Gerencie o descarte do seu lixo de forma consciente e organizada, ajudando a sua cidade e o meio ambiente.</p>
            </div>
            <div className="containerCards">
            <Cards icon1={Lixeira} icon2={Reciclavel} title="Informação 1" description="Descrição da informação 1." />
            <Cards icon1={caminhao} title="Informação 2" description="Descrição da informação 2." />
            <Cards icon1={Map}  title="Informação 3" description="Descrição da informação 3." />
            </div>
        </section>
    );
}

export default InfoCards;