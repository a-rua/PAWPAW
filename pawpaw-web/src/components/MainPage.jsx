import { AboutUs } from "./AboutUs"
import { Carousel } from "./Carousel"



export const MainPage = () => {

    return (
        <>
            <div className="imageContainer">IMG</div>
            <div className="bg-column">
                <div className="cont">
                <Carousel />
                <AboutUs />
                </div>
            </div>
        </>
    )
}