import Header from '../src/layouts/Header/Header'
import Menus from './components/menu/menu'
import MainContent from './components/main-content/MainContent'
import './styles/main.scss'


function App() {

  return (
    <>
      <Header />
      <Menus />
      <MainContent />
    </>
  )
}

export default App
