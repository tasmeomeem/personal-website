import { Link } from "react-router-dom";

function Menu() {
    return (
        <>
            <div className="d-flex justify-content-end">
                <nav className="navbar menu navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/resume">Resume</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/portfolio">portfolio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blog">blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> 
        </>
    );
}

export default Menu;







