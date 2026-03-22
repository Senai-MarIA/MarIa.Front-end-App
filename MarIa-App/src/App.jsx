import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import SectionMain from "./components/layouts/Section-Main"
import BuscaCep from "./components/layouts/BuscaCep"
import InfoCards from "./components/layouts/InfoCards"
import SectionMap from "./components/layouts/SectionMap"
import './App.css'
function App() {
    return(
        <>
        <div className="page">
            <Header/>
            <SectionMain/>
            <BuscaCep/>
            <InfoCards/>
            <SectionMap/>
            <Footer/>
        </div>
        </>
    )
}



export default App