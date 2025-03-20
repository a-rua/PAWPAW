import { Card } from "./Card";

export const SlidesCarousel = ({ animal, index, slideIndex }) => (
    <div className={`mySlides ${index === slideIndex ? "show" : ""}`}>
        <Card animal={animal} />
    </div>
)