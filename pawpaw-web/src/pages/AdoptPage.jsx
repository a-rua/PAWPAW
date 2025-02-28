import { getAnimales } from "../services/animalService"
import { CardGridDisplay } from "../components/CardGridDisplay"

export const AdoptPage = () => {

    const animal = getAnimales()

    const adoptables = animal.filter(a => a.estado === 'Disponible')

    
    return (
        <>
            <div className="bg-column">
                <div className="cont">
                    <h1>Nuestros animales disponibles</h1>
                <CardGridDisplay animal={adoptables} />
                </div>
            </div>
        </>
    )
}