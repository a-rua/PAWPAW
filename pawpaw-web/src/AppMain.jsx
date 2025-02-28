import logo from './assets/Img/logoSinLetra.png'
import logoBig from './assets/Img/logoSinLetraBig.png'
import logoBlack from './assets/Img/pataPerro.png'

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import { MainPage } from "./pages/MainPage"
import { AdoptPage } from "./pages/AdoptPage"
import { SadPage } from "./pages/SadPage"
import { HappyPage } from "./pages/HappyPage"

import { Route, Routes } from "react-router-dom"


export const AppMain = () => {

    return (
        <>
            <Navbar logo={logo} />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/disponible" element={<AdoptPage />} />
                <Route path="/adoptados" element={<HappyPage />} />
                <Route path="/perdidos" element={<SadPage />} />
                <Route path="*" element={<MainPage />} />
            </Routes>
            <Footer logo={logoBig} />
        </>
    )
}