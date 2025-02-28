import { getDisponibles } from "../services/animalService"
import { CardGridDisplay } from "../components/CardGridDisplay"

export const AdoptPage = () => (
    <>
        <div className="bg-column">
            <div className="cont">
                <h1>Nuestros animales disponibles</h1>
                <CardGridDisplay animal={getDisponibles()} />
            </div>
        </div>
    </>
)
