import { getAdoptados } from "../services/animalService"
import { CardGridDisplay } from "../components/CardGridDisplay"

export const HappyPage = () => (
    <>
        <div className="bg-column">
            <div className="cont">
                <h1>Nuestros animales afortunados</h1>
                <CardGridDisplay animal={getAdoptados()} />
            </div>
        </div>
    </>
)
