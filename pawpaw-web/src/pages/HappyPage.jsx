import { getAnimales } from "../services/animalService"
import { CardGridDisplay } from "../components/CardGridDisplay"

export const HappyPage = () => {

    const animal = getAnimales()

    const adoptados = animal.filter(a => a.estado === 'Adoptado')


    return (
        <>
            <div className="bg-column">
                <div className="cont">
                    <h1>Nuestros animales afortunados</h1>
                    <CardGridDisplay animal={adoptados} />
                </div>
            </div>
        </>
    )
}