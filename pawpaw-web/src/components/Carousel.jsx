import { useEffect, useState } from "react";
import { getAnimales } from "../services/animalService"
import { Card } from "./Card";
import { CardGridDisplay } from "./CardGridDisplay";


export const Carousel = () => {

    const animal = getAnimales()

    
    let arr = [];
    while (arr.length < 5) {
        let r = Math.floor(Math.random() * 30) + 1;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    let sel = arr.map(num => animal[num - 1]); // Restamos 1 porque los índices comienzan en 0

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const showSlides = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % sel.length);
        };
        const interval = setInterval(showSlides, 4000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="contenedor-carousel">
            {sel.map(({ id, nombre, estado, imagen1 }, index) => (
                <div
                    className="mySlides"
                    key={id}
                    style={{ display: index === slideIndex ? "block" : "none" }}
                >
                    <Card nombre={nombre} estado={estado} imagen1={imagen1} />
                </div>
            ))}
        </div>

    );
};
