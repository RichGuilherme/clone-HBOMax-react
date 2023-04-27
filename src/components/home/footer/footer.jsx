import './footer.css'
import logoFacebook from '../../../assets/imgs/fb_0.png'
import logoTwitter from '../../../assets/imgs/twitter_0.png'
import logoYoutube from '../../../assets/imgs/youtube_0.png'
import logoInstagram from '../../../assets/imgs/instagram_0.png'

export default function footer () {
    return (
        <footer>
            <div className = "c-footer container">
                <div className = "nav__footer">
                    <a className = "footer__link"
                       href='#'>
                        agora na hbo max</a>
                    <a className = "footer__link"
                       href='#'>
                        em breve</a>
                    <a className = "footer__link"
                       href='#'>
                        filme em destaque</a>
                    <a className = "footer__link"
                       href='#'>
                        séries</a>
                    <a className = "footer__link"
                       href='#'>
                        ajuda</a>
                </div>
                
                <p className = "text--small footer__direitos-autorais">© 2023 WarnerMedia Direct Latin America, LLC. Todos os direitos reservados. HBO Max é usado sob licença.</p>
    
                <div className = "c-footer__rede-sociais">
                    <img 
                     src= {logoFacebook} 
                     alt= "logo-facebook" />
                    <img 
                     src= {logoTwitter} 
                     alt= "logo-twitter" />
                    <img 
                     src= {logoYoutube} 
                     alt= "logo-youtube" />
                    <img 
                     src= {logoInstagram} 
                     alt= "logo-instagram" />
                </div>
            </div>
        </footer>
    )
}