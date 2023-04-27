import './main.css'
import CNDefault from '../../../assets/imgs/CN-Default.webp'
import DCDefault from '../../../assets/imgs/DC_Default.webp'
import HBODefault from '../../../assets/imgs/hbo-default_0.webp'
import MaxDefault from '../../../assets/imgs/MAX-Default.webp'
import UCLDefault from '../../../assets/imgs/UCL-Default.webp'
import WBDefault from '../../../assets/imgs/WB-Default.webp'


export default function main () {
    return (
        <main>
            <section className = "assinatura">
              <div className='container'>
                   <h2 className='assinatura__title'>Conheça nossos planos e economize na assinatura trimestral ou anual com o pagamento antecipado</h2>
                    
                    <div className="c-assinatura__cards">

                          <div className="assinatura__card">
                            <div>
                                 <div className="assinatura__card-title">
                                    <h3>Mobile</h3>
                                    <p className='assinatura__card-price'>R$ 19,90 <span className='asssinatura__price--small'>/mês</span></p>
                                 </div>
                                 <ul className='assinatura__informations'>
                                    <li className='assinatura__descricao'>Aproveite em smartphones e tablets, onde quiser.</li>
                                    <li className='assinatura__descricao'>Assista em 1 tela por vez.</li>
                                    <li className='assinatura__descricao'>Tenha conteúdo em resolução adaptada para cada dispositivo.</li>
                                    <li className='assinatura__descricao'>Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                 </ul>
                            </div>

                            <a className="bnt-plano button--gradient button">Escolher o plano mobile</a>

                          </div>
                          
                          <div className= "assinatura__card">
                            <div>
                                <div className="assinatura__card-title">
                                    <h3>Multitelas</h3>
                                    <p className='assinatura__card-price'>R$ 27,90 <span className='asssinatura__price--small'>/mês</span></p>
                                </div>
                               
                                <ul className='assinatura__informatons'>
                                    <li className='assinatura__descricao'>Aproveite em todos os seus dispositivos.</li>
                                    <li className='assinatura__descricao'>Chromecast e Airplay disponíveis.</li>
                                    <li className='assinatura__descricao'>Assista em até 3 telas ao mesmo tempo.</li>
                                    <li className='assinatura__descricao'>Tenha conteúdo em alta definição, com qualidade 4K.</li>
                                    <li className='assinatura__descricao'>Baixe suas séries e filmes favoritos, assista onde e quando quiser.</li>
                                    <li className='assinatura__descricao'>Crie até 5 perfis diferentes.</li>
                                </ul>
                            </div>
      
                           <a className="bnt-plano button--gradient button">Escolher o plano mobile</a>

                           </div>
                      </div>
            </div>
            </section>
            
            <section className = "cards container">
                  <h2 className = "title-cards">Descubra novos universos</h2>

                  <div className="c__cards">
                    <div className="contents__card">
                        <img className = "contents__image"
                          src= {HBODefault} 
                          alt="Hbo"/>
                    </div>

                    <div className="contents__card">
                        <img className = "contents__image"
                          src= {MaxDefault} 
                          alt="Max originals"/>
                    </div>

                    <div className="contents__card">
                        <img className = "contents__image"
                          src= {DCDefault} 
                          alt="DC"/>
                    </div>

                    <div className="contents__card">
                        <img className = "contents__image"
                          src= {WBDefault} 
                          alt="Warner bross"/>
                    </div>

                    <div className="contents__card">
                        <img className = "contents__image"
                          src= {CNDefault} 
                          alt="Cartoon-network"/>
                    </div>
                    <div className="contents__card">
                        <img className = "contents__image"
                          src= {UCLDefault} 
                          alt="UEFA champions leagues"/>
                    </div>
                  </div>
            </section>
        </main>
    )
}