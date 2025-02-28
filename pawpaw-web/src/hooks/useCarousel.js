import { useState, useEffect } from "react";
import { getAnimales } from "../services/animalService";

export const useCarousel = () => {
    const animal = getAnimales();
    const [sel, setSel] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        let arr = [];
        while (arr.length < 5) {
            let r = Math.floor(Math.random() * 30) + 1;
            if (!arr.includes(r)) arr.push(r);
        }
        setSel(arr.map(num => animal[num - 1]));
    }, [animal]);

    useEffect(() => {
        const showSlides = () => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % sel.length);
        };
        const interval = setInterval(showSlides, 4000);
        return () => clearInterval(interval);
    }, [sel.length]);

    return { sel, slideIndex };
};