import React from 'react';
import iconmap from "../../../assets/img/MapSolo.svg"
import SearchIcon from "../../../assets/img/SearchIcon.svg"
import caminhaoIcon from "../../../assets/img/caminhao.svg"
import iconOrangeCaminhao from "../../../assets/img/iconOrangeCaminhao.svg"
import IconEnergy from "../../../assets/img/IconEnergy.svg"
import "./style.css"

export default function SectionMap({ dadosLocal }) {
    const enderecoFormatadoParaMapa = dadosLocal ? `${dadosLocal.logradouro}, ${dadosLocal.bairro}, ${dadosLocal.localidade} - ${dadosLocal.uf}` : "São Paulo";
    const buscaGoogle = `Ecoponto perto de ${enderecoFormatadoParaMapa}`;
    //texto para barra de pesquisa do google
    const urlMapa = `https://maps.google.com/maps?q=${encodeURIComponent(buscaGoogle)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

    return (
        <section className="section-map" id='IdMap'>
            <div className="group1map">
                <iframe 
                    src={urlMapa}
                    allowFullScreen="" 
                    loading="lazy"
                    title="Mapa da região"
                ></iframe>
                
                <div className="complementationMap">
                    <div className="iconCompletationMap">
                        <span className="OrangeDriver"><img src={iconOrangeCaminhao} alt=""/>Cata-Bagulho</span>
                        <span className="EletronicTrash"><img src={IconEnergy} alt="" />Lixo Eletrônico</span>
                    </div>
                    <div className="textmap">
                        <h3>Endereço:</h3>
                        <p className="local">
                            {dadosLocal ? dadosLocal.logradouro : 'Rua não informada'}
                        </p>
                        <p className="Bairro-cidade">
                            {dadosLocal ? `${dadosLocal.bairro}, ${dadosLocal.localidade} - ${dadosLocal.uf}` : 'Bairro, Cidade - UF'}
                        </p>
                    </div>
                </div>
            </div>
            <div className="group2map">
                <span className="IconMapSpan"><img src={iconmap} alt="" />  Mapa Interativo</span>
                <h2>Descubra onde <span className="SpanDescartar">descartar</span> o que não vai no lixo comum.</h2>
                <p className="TextAboutEletronic">Lixo eletrônico, pilhas, óleo de cozinha e móveis velhos exigem descarte adequado. Nosso mapa interativo mostra os ecopontos e locais de coleta mais próximos de você.</p>

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