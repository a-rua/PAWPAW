import { NavLink } from "react-router-dom";

export const Card = ({ animal }) => (
    <div className="body-card">
        <div className="card-image">
            <div className="box">
                <img src={animal.imagen1} />
                {console.log(animal.imagen1)}
            </div>
        </div>
        <div className="card-col">
            <div className="card-top">{animal.nombre}
                <div className="estado">{animal.estado}</div>
            </div>
            <div className="card-bottom">
                <NavLink to={`/detalle/${animal.id}`} state={{ animal }} >
                    <button className="btn btn-dark">
                        Ver Mas
                    </button>
                </NavLink>
            </div>
        </div>
    </div >
)
