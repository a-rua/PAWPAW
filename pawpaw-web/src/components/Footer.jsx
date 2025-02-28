
export const Footer = ({ logo }) => (
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
        </div>
    </>
)