export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="logo">
                    <a className="nav-link" href="#"><img src="../public/image/Logo.png" width="50px"/>
                    Planify</a>
                </div>
                <div className="search-container">
                    <div className="search-wrapper">
                        <i className="fas fa-search"></i>
                        <input type="text" placeholder="Nom, spécialité, établissement..." className="search-bar"/>
                    </div>
                    <div className="search-wrapper">
                        <input type="text" placeholder="Où" className="search-bar-second"/>
                        <i className="fas fa-map-marker-alt"></i>
                        <button className="search-button">Go</button>

                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Centre d'aide</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Vous êtes pro ?</a>
                            </li>
                            <li className="nav-itdem">
                                <a className="nav-link" href="#">Se connecter</a>
                            </li>
                        </ul>
                    </div>
                </div>
        </nav>
)
}