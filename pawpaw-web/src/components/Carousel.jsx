import { getAnimales } from "../services/animalService"


export const Carousel = () => {

    const animal = getAnimales()
    console.log(animal);

    return (
        <>
            <div className="contenedor-carousel">

                <div className='card'>
                    
                </div>
            </div>
        </>
    )
}