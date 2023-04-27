import './header.css'
import logoHbo from '../../../assets/imgs/hbo.png'
import logoDC from '../../../assets/imgs/dc.png'
import logoWB from '../../../assets/imgs/wb.png'
import logoCN from '../../../assets/imgs/cartoon-network_neutral.png'
import logoMax from '../../../assets/imgs/max_originals.png'


export default function Header () {
    return (
        <header className = "header"> 
            <div className='header__container'>
                <div className="header__logos-images">
                     <img className = "logos-empresas" 
                      src = {logoHbo} 
                      alt = "logo-hbo" />
                     <img className = "logos-empresas" 
                      src = {logoDC} 
                      alt = "logo-dc" />
                     <img className = "logos-empresas" 
                      src = {logoWB} 
                      alt = "logo-wb" />
                     <img className = "logos-empresas" 
                      src = {logoCN} 
                      alt = "logo-cartoon_network" />
                     <img className = "logos-empresas" 
                      src = {logoMax}
                      alt = 'logo-max' />
                 </div>
                     <h1 className = "header__title">
                        <span className='header__title--light'> curta as melhores histórias</span>
                        para todo mundo
                     </h1>
         
                    <div className="divider"></div>
         
                 <div className="header__assinatura">
                     <p className = "header__text">Assinaturas a partir de</p>
                     <p className = "header__price">R$14,15<span className='asssinatura__price--small'>/mês*</span></p>
                 </div> 

                     <a href="#" className="header__bnt button button--gradient">assine agora</a>
                    
                    <div className="text--small">
                        <p>*aplicável ao plano anual com o</p>
                        <p>pagamento antecipado.</p>
                    </div>
            </div>
            
   </header>
    )
}