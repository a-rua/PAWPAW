import { Footer } from "./components/Footer"
import { MainPage } from "./components/MainPage"
import { Navbar } from "./components/Navbar"
import logo from './assets/Img/logoSinLetra.png'
import logoBig from './assets/Img/logoSinLetraBig.png'
import logoNegro from './assets/Img/pataPerro.png'
import { AdoptPage } from "./components/AdoptPage"
import { SadPage } from "./components/SadPage"
import { HappyPage } from "./components/HappyPage"


export const AppMain = () => {

    return (
        <>
        <Navbar logo={logo} />
        {/* <MainPage  /> */}
        <AdoptPage />
        {/* <HappyPage /> */}
        {/* <SadPage /> */}
        <Footer logo={logoBig}/>
        </>
    )
}