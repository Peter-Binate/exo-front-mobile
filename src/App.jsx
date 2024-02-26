import Header from '../src/layouts/Header/Header'
import Menus from './components/menu/menu'
import MainContent from './components/main-content/MainContent'
import Footer from '../src/layouts/Footer/Footer'
import './styles/main.scss'


function App() {

  return (
    <>
      <div className="header-in-scroll">
        <Header />
        <Menus />
      </div>
      <MainContent />
      <Footer />
    </>
  )
}

export default App
