import { getAnimales } from "../services/animalService"
import { CardGridDisplay } from "./CardGridDisplay"

export const SadPage = () => {

    const animal = getAnimales()

    const morto = animal.filter(a => a.estado === 'Perdida')
    console.log(morto)

    return (
        <>
            <div className="bg-column">
                <div className="cont">
                    <h1>Te echaremos de menos</h1>
                <CardGridDisplay animal={morto} />
                </div>
            </div>
        </>
    )
}