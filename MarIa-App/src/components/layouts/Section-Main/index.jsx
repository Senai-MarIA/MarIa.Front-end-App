import  './style.css'

function Main() {
    return (
        <>


            <section className="Section_Main">
                <span>
                    <img src="../../../assets/img/IconSino.svg" alt="" />
                   <p> Nunca mais perca o dia da coleta!</p>
                   </span>
                   <div className="container1main">
                        <div className="group1Main">
                            <h1>Descarte inteligente para uma <span>cidade mais limpa.</span></h1>
                              <p>Descubra os dias exatos da coleta seletiva e comum na sua rua, encontre pontos de descarte para lixo eletrônico e das operações cata-bagulho com facilidade.</p>
                         </div>
                         <div className="buttonMain">
                            <a href="">Baixar Gratuitamente</a>
                            <a href="">Veja como funciona</a>
                        </div>
                </div>
                <div className="container2main">
                    <img src="../../../assets/img/IconCell.svg" alt="" />
                    /*nao ta funcionando a importação da imagem, por isso coloquei o caminho direto, arrumar depois*/
                </div>
            </section>
        </>
    )
}
export default Main;