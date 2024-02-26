import Header from '../src/layouts/Header/Header'
import Menus from './components/menu/menu'
import MainContent from './components/main-content/MainContent'
import Footer from '../src/layouts/Footer/Footer'
import './styles/main.scss'


function App() {

  return (
    <>
      <Header />
      <Menus />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
