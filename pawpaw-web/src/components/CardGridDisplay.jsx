import { Card } from "./Card"

export const CardGridDisplay = ({ animal }) => (
    <div className='gridCard'>
        {animal.map(({ id, nombre, estado, imagen1 }) => (
            <Card key={id} nombre={nombre} estado={estado} imagen1={imagen1} />
        ))}
    </div>
)