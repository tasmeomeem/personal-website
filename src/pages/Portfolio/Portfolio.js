import { Link } from "react-router-dom";
import Sidebar from './../../components/Layout/Sidebar';
import Menu from './../../components/Layout/Menu';
import Header from './../../components/Layout/Header';

function Portfolio() {
    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <Sidebar />

                    <div className="col-sm-12 col-md-12 col-xl-9">
                        <div className="front-side mt-5 pb-5">
                            <Menu />

                            <div className="row px-5">
                                <div className="col-12">
                                    <div className="portfolio fs-2 fw-bold text-light">
                                        <div>
                                            Portfolio
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heading-border ms-5 mt-2"></div>

                            <div className="d-flex">
                                <nav className="navbar portfolio navbar-expand-lg">
                                    <div className="container-fluid">
                                        <div className="navbar" id="navbarNav">
                                            <ul className="navbar-nav ms-auto">
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="All">All</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Web desing">Web desing</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Application">Application</Link>
                                                </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" to="/Web development">Web development</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div> 

                            <div className="row px-5">
                                <div className="col-md-8 col-sm-12 col-lg-4 col-xl-4">
                                    <div className="portfolio-card shadow">
                                        <div className="inner">
                                            <img src="./assets/image/portfolio-1.png" className="card-img-top" />
                                        </div>
                                        
                                        <div className="card-body">
                                            <div className="card-text">
                                                Finance 
                                            </div>

                                            <div className="web">
                                                web Development
                                            </div> 
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8 col-sm-12 col-lg-4 col-xl-4">
                                    <div className="portfolio-card">
                                        <div className="inner">
                                            <img src="./assets/image/portfolio-1.png" className="card-img-top" />
                                        </div>
                                        
                                        <div className="card-body">
                                            <div className="card-text">
                                                Orizon
                                            </div>

                                            <div className="web">
                                                web Development
                                            </div> 
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8 col-sm-12 col-lg-4 col-xl-4">
                                    <div className="portfolio-card">
                                        <div className="inner">
                                            <img src="./assets/image/portfolio-1.png" className="card-img-top" />
                                        </div>
                                        
                                        <div className="card-body">
                                            <div className="card-text">
                                                Fundo
                                            </div>

                                            <div className="web">
                                                web Development
                                            </div> 
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
export default Portfolio;
