import React, { useState } from 'react';
import Header from "./components/layouts/Header"
import Footer from "./components/layouts/Footer"
import SectionMain from "./components/layouts/Section-Main"
import BuscaCep from "./components/layouts/BuscaCep"
import InfoCards from "./components/layouts/InfoCards"
import SectionMap from "./components/layouts/SectionMap"
import SectionGame from "./components/layouts/Section-Game"
import Vlibras from "@djpfs/react-vlibras"
import './App.css'

function App() {
    const [localizacao, setLocalizacao] = useState(null); 

    return(
        <>
        <div className="page">
            <Vlibras />
            <Header/>
            <SectionMain/>
            
            <BuscaCep onBuscaSucesso={setLocalizacao} />
            
            <InfoCards/>
            
            <SectionMap dadosLocal={localizacao} />
            
            <SectionGame/>
            <Footer/>
        </div>
        </>
    )
}

export default App