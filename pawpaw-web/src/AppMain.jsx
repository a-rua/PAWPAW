import logo from '/Img/logoSinLetra.png'
import logoBig from '/Img/logoSinLetraBig.png'
import logoBlack from '/Img/pataPerro.png'

import { Navbar } from "./components/Navbar"
import { Footer } from "./components/Footer"

import { MainPage } from "./pages/MainPage"
import { AdoptPage } from "./pages/AdoptPage"
import { SadPage } from "./pages/SadPage"
import { HappyPage } from "./pages/HappyPage"
import { DetailsPage } from './pages/DetailsPage'
import { Login } from './pages/Login'

import { Navigate, Route, Routes } from "react-router-dom"


export const AppMain = () => {

    return (
        <>
            {/* <Routes>
            </Routes> */}

            <Navbar logo={logo} />
            <Routes>
                <Route path="/" element={<MainPage logo={logoBlack} />} />
                <Route path="/disponible" element={<AdoptPage />} />
                <Route path="/adoptados" element={<HappyPage />} />
                <Route path="/perdidos" element={<SadPage />} />
                <Route path="/detalle/:id" element={<DetailsPage />} />
                <Route path='/login' element={<Login />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
            <Footer logo={logoBig} />
            
        </>
    )
}