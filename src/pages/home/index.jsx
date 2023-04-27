import Nav from '../../components/home/nav/nav.jsx'
import Header from '../../components/home/header/header.jsx'
import Main from '../../components/home/main/main.jsx'
import Footer from '../../components/home/footer/footer.jsx'
import './index.css'

export default function Index () {
     return (
        <div className='home'>
          <Nav/>
          <Header/>
          <Main/>
          <Footer/> 
        </div>
     )
}