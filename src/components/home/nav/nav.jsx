import logoHboMax from '../../../assets/imgs/hbo-logo.svg'

export default function Nav () {
    return (
        <nav className = "menu">
            <a href='#' className='menu__logo'>
                <img src = {logoHboMax} alt="" className = "menu__logo-image"/>
            </a>

            <div className="menu__cadastro">
                <a href="#" className="menu__bnt menu__login">entrar</a>
                <a href="#" className="menu__bnt menu__link--botton button">assine agora</a>
            </div>
        </nav>
    )
}