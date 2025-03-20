import { SlidesCarousel } from "./SlidesCarousel";
import { useCarousel } from "../hooks/useCarousel";


export const Carousel = () => {

    const { sel, slideIndex } = useCarousel();

    return (
        <>
            <h1>Algunos de nuestros chicos</h1><br />
            <div className="contenedor-carousel">
                <div className={`cambios-carousel ${slideIndex === 0 ? "transitioning" : ""}`} style={{transform: `translateX(${-slideIndex * 100}%)`}}>
                    {sel.map((sel, index) => (
                        <SlidesCarousel key={`${sel.id}-${index}`} animal={sel} index={index} slideIndex={slideIndex} />
                    ))}
                </div>
            </div>
        </>
    );
};
