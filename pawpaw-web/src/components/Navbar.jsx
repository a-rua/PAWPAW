import logo from '../assets/Img/logoSinLetra.png'

export const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href='#'><img src={logo} alt="Logo" width="30" height="24" /> PawPaw</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active borde mx-1" href="#">Buscando Familia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mx-1" href="#">Final Feliz</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active borde mx-1" href="#">Amargas Perdidas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active mx-1" href='#'>Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}