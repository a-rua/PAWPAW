import { getAdoptados } from "../services/animalService"
import { CardGridDisplay } from "../components/CardGridDisplay"

export const HappyPage = () => (
    <>
        <div className="bg-column">
            <div className="cont">
                <h1>Los antiguos afortunados</h1>
                <CardGridDisplay animal={getAdoptados()} />
            </div>
        </div>
    </>
)
