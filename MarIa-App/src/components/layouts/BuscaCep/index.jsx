import React from 'react';
import './style.css'; 
import ImgCellCep from "../../../assets/img/ImgCellCep.svg"
function BuscaCep() {
    return (
        <section className="busca-cep-section">
<div className="wave-container">
    <svg 
        className="wave-dark" 
        viewBox="0 0 1280 492" 

        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
    >
                {/*declara ao navegador que isso é um svg*/}

        <path d="M693 78.7691C552.5 41.1222 414.911 -47.3736 226 32.1045C138.055 69.1044 -64 49.5 -64 49.5V491.5H1219L1480.5 119.5C1480.5 119.5 1331 45 1219 32.1045C1107 19.2091 833.5 116.416 693 78.7691Z" fill="#10895E"/>
        {/*este link dá para pegar indo no figma e copiando o código do svg, ou seja, é o código do svg que tem no figma*/}
    </svg>

    <svg 
        className="wave-light" 
        viewBox="0 0 1280 586" 
        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M526 93.9139C666.5 49.0287 804.089 -56.4821 993 38.2772C1080.94 82.391 1283 59.0173 1283 59.0173V586H0V38.2772C0 38.2772 385.5 138.799 526 93.9139Z" fill="#35A17C"/>
    </svg>
</div>
            <div className="busca-cep-content">
                <img src={ImgCellCep} alt="" />

                <div className="text-content">
                    <h2>É fácil começar!!</h2>
                    <p>
                        Basta informar o seu CEP para personalizar todo o aplicativo com as 
                        datas e informações exclusivas da sua região. Não salvamos seus 
                        dados pessoais.
                    </p>
                    
                    <form className="form-container">
                        <input type="text" placeholder="CEP" className="cep-input" maxLength={9} />
                        <button className="cep-button">Pesquisar</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BuscaCep;