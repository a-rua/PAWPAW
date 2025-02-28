import { AboutUs } from "../components/AboutUs"
import { Carousel } from "../components/Carousel"

export const MainPage = ({ logo }) => (
    <>
        <div className="imageContainer"><img src={logo} /></div>
        <div className="bg-column">
            <div className="cont">
                <Carousel />
                <AboutUs logo={logo} />
            </div>
        </div>
    </>
)
