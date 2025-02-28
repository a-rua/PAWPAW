
export const Card = ({ nombre, estado, imagen1 }) => (
    <div className="body-card">
        <div className="card-image">
            <div className="box">
                <img src={imagen1} />
            </div>
        </div>
        <div className="card-col">
            <div className="card-top">{nombre}
                <div className="estado">{estado}</div>
            </div>
            <div className="card-bottom"><button className="btn btn-dark">Ver Mas </button></div>
        </div>
    </div>
)
