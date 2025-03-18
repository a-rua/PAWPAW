import { Navigate, useLocation, useParams } from "react-router-dom"

export const DetailsPage = () => {

    const { id } = useParams();
    const location = useLocation();
    const animal = location.state?.animal;

    if (!animal) {
        return (<>
            <h1 id="noData">NO SE HA ENCONTRADO LA ID</h1>
                setTimeout(<Navigate to={'/'} />, 3000)
            {/* console.log(location) */}
        </>)
    }

    return (
        <>
            <div id="detailsContainer">
                <div id="detailsImagen">

                </div>
                <div id="detailsColumn">
                    <div id="detailsTitle">
                        <h1>{animal.nombre}</h1>
                        <div id="detailsEspecie">
                            {animal.especie}
                        </div>
                    </div>
                    <div id="detailsDesc">
                        {animal.descripcion}
                    </div>
                    <button className="btn bg-warning" id="detailsButton">Contactanos</button>
                </div>
            </div>
        </>
    )
}