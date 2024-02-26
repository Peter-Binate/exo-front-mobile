import MainContent from './components/main-content/MainContent'
// import ServiceRecap from './components/services/services-recap'
// import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import './styles/main.scss'


function App() {

  return (
    <>
       <div className="header-in-scroll"></div>
      <MainContent />
       {/* <ServiceRecap /> */}
    </>
  )
}

export default App
