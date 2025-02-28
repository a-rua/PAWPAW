import { getMuertos } from "../services/animalService"
import { CardGridDisplay } from "../components/CardGridDisplay"

export const SadPage = () => (
    <>
        <div className="bg-column">
            <div className="cont">
                <h1>Te echaremos de menos</h1>
                <CardGridDisplay animal={getMuertos()} />
            </div>
        </div>
    </>
)
