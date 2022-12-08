import { Link } from "react-router-dom";
import Layout from './../../components/Layout/Layout';
import PortfolioCard from '../../components/Card/PortfolioCard';

function Portfolio() {
    let portfolios = [
        {
            img: "./assets/image/Turing.png",
            title: "Turing (clone)",
            description: "HTML/CSS/Bootstrap/React",
        },
        {
            img: "./assets/image/Home-Flambo.png",
            title: "Movie website",
            description: "HTML/CSS/Bootstrap/React",
        },
        {
            img: "./assets/image/Anon-eCommerce-Website.png",
            title: "E-commerce-site",
            description: "HTML/CSS/Bootstrap/React",
        },
        {
            img: "./assets/image/Personal-website.png",
            title: "Personal-Website",
            description: "HTML/CSS/Bootstrap/React",
        },
        {
            img: "./assets/image/promotional page.png",
            title: "Promotional Card",
            description: "HTML/CSS/Bootstrap",

        },
        {
            img: "./assets/image/Supermate-Gold.png",
            title: "Promotional Card",
            description: "HTML/CSS/Bootstrap",
        }
    ];
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
                                            <div className="nav-link" to="All">
                                                All
                                            </div>
                                        </li>

                                        <li className="nav-item">
                                            <div className="nav-link" to="/Web desing">
                                                Web desing
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="row px-5 mt-3 justify-content-center">
                        {portfolios.map((portfolio, index) =>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-4"key={`portfolio-card-${index}`}>
                                <PortfolioCard
                                    img={portfolio.img}
                                    title={portfolio.title}
                                    description={portfolio.description}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Portfolio;
