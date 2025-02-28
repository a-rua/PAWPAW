import { SlidesCarousel } from "./SlidesCarousel";
import { useCarousel } from "../hooks/useCarousel";


export const Carousel = () => {

    const { sel, slideIndex } = useCarousel();

    return (
        <>
            <h1>Algunos de nuestros chicos</h1><br />
            <div className="contenedor-carousel">
                {sel.map(({ id, nombre, estado, imagen1 }, index) => (
                    <SlidesCarousel key={id} nombre={nombre} estado={estado} imagen1={imagen1} index={index} slideIndex={slideIndex} />
                ))}
            </div>
        </>
    );
};
