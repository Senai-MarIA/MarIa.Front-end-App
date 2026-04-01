import  './style.css'
import iconSino from '../../../assets/img/IconSino.svg';
import imgMain from '../../../assets/img/imgMain.svg';
import iconCell from '../../../assets/img/IconCell.svg';
function Main() {
    return (
        <>


            <section className="Section_Main">
                
                   <div className="container1main">
                    <span className="spanMain">
                    <img src={iconSino} alt="" />
                   <p> Nunca mais perca o dia da coleta!</p>
                </span>
                        <div className="group1Main">
                            <h1>Descarte inteligente para uma <span>cidade mais limpa.</span></h1>
                              <p>Descubra os dias exatos da coleta seletiva e comum na sua rua, encontre pontos de descarte para lixo eletrônico e das operações cata-bagulho com facilidade.</p>
                         </div>
                         <div className="buttonMain">
                            <a href="" className='DownloadMain'>
                                <img src={iconCell} alt="" />
                                Baixar Gratuitamente
                                </a>
                            <a href="" className='SeeMain'>
                                Veja como funciona
                            </a>
                        </div>
                </div>
                <div className="container2main">
                    <img src={imgMain} alt="" />
                </div>
            </section>

            
        </>
    )
}
export default Main;