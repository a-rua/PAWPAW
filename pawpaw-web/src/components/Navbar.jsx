import { NavLink } from 'react-router-dom';
import useNavbar from '../hooks/useNavbar';

export const Navbar = ({ logo }) => {

    useNavbar()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navbar' data-bs-theme="dark">
            <div className="container-fluid">
                <NavLink to={'/home'} className="navbar-brand">
                    <img id='logo' src={logo} alt="Logo" />
                    PawPaw
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={'/disponible'} className="nav-link active borde mx-1">
                                Buscando Familia
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/adoptados'} className="nav-link active mx-1">
                                Final Feliz
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={'/perdidos'} className="nav-link active borde mx-1">
                                Amargas Perdidas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active mx-1">
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}