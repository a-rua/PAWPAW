import { useEffect } from "react";

const useNavbar = () => {
    useEffect(() => {
        const scrollFunction = () => {
            const logo = document.getElementById("logo");
            if (!logo) return; // Evita errores si no encuentra el logo

            if (document.documentElement.scrollTop > 50) {
                logo.style.height = "24px";
                logo.style.width = "30px";
            } else {
                logo.style.height = "72px";
                logo.style.width = "90px";
            }
        };

        window.addEventListener("scroll", scrollFunction);

        return () => {
            window.removeEventListener("scroll", scrollFunction); // Limpieza del evento
        };
    }, []);
};

export default useNavbar;