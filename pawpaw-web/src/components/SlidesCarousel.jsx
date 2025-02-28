import { Card } from "./Card";

export const SlidesCarousel = ({ nombre, estado, imagen1, index, slideIndex }) => (
    <div className={`mySlides ${index === slideIndex ? "show" : ""}`} style={{ display: index === slideIndex ? "block" : "none" }}>
        <Card nombre={nombre} estado={estado} imagen1={imagen1} />
    </div>
)