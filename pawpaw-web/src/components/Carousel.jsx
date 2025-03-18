import { SlidesCarousel } from "./SlidesCarousel";
import { useCarousel } from "../hooks/useCarousel";


export const Carousel = () => {

    const { sel, slideIndex } = useCarousel();

    return (
        <>
            <h1>Algunos de nuestros chicos</h1><br />
            <div className="contenedor-carousel">
                {sel.map((sel, index) => (
                    <SlidesCarousel key={sel.id} animal={sel} index={index} slideIndex={slideIndex} />
                ))}
            </div>
        </>
    );
};
