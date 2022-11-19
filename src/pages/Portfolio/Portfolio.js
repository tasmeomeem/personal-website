import { Link } from "react-router-dom";
import Layout from './../../components/Layout/Layout';
import PortfolioCard from '../../components/Card/PortfolioCard';

function Portfolio() {
    return (
        <>
            <Layout>
                <div>
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
                            <PortfolioCard
                                img="./assets/image/portfolio-1.png" 
                                title="Finance" 
                                description="web Development"
                            />
                        </div>

                        <div className="col-md-8 col-sm-12 col-lg-4 col-xl-4">   
                            <PortfolioCard
                                img="./assets/image/portfolio-1.png" 
                                title="Finance" 
                                description="web Development"
                            />
                        </div>

                        <div className="col-md-8 col-sm-12 col-lg-4 col-xl-4">
                            <PortfolioCard
                                img="./assets/image/portfolio-1.png" 
                                title="Finance" 
                                description="web Development"
                            />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Portfolio;
