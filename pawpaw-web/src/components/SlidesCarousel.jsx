import { Card } from "./Card";

export const SlidesCarousel = ({ animal, index, slideIndex }) => (
    <div className={`mySlides ${index === slideIndex ? "show" : ""}`} style={{ display: index === slideIndex ? "block" : "none" }}>
        <Card animal={animal} />
    </div>
)