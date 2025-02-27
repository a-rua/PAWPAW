
export const Footer = ({ logo }) => {

    return (
        <>
            <div className="footer-container">
                <div className="cell1">
                    <h3>Contactanos</h3>
                    <ul>
                        <li>Telefono: +34 999 333 666</li>
                        <li>Mail: pawpaw@protectors.es</li>
                        <li>Direccion:</li>
                        <ul>
                            <li>Vizcaya</li>
                            <li>Bilbao</li>
                            <li>Calle Conventos 19</li>
                        </ul>
                    </ul>

                </div>
                <div className="cell-img">
                    <img src={logo} />
                    PAWPAW
                </div>
                <div className="cell3">
                    {/* <!-- Facebook --> */}
                    <i className="fab fa-facebook-f"></i>

                    {/* <!-- Twitter --> */}
                    <i className="fab fa-twitter"></i>

                    {/* <!-- Google --> */}
                    <i className="fab fa-google"></i>

                    {/* <!-- Instagram --> */}
                    <i className="fab fa-instagram"></i>

                    <i className="bi bi-whatsapp"></i>
                </div>
            </div>
        </>
    )
}