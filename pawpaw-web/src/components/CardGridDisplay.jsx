import { Card } from "./Card"

export const CardGridDisplay = ({ animal }) => (
    <div className='gridCard'>
        {animal.map((a) => (
            <Card key={a.id} animal={a} />
        ))}
    </div>
)