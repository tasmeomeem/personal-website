import Header from '../components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';

function Blog() {
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
                                            Blog
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heading-border ms-5 mt-2"></div>

                            <div className="row px-5">
                                <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                                    <div className="portfolio-card shadow">
                                        <div className="inner-blog">
                                            <img src="./assets/image/street food.png" className="card-img-top" />
                                        </div>
                                        
                                        <div className="card-body">
                                            <div className="card-blog">
                                                Design .Fab 23,2022
                                            </div>
                                            <h4 className="text-conference">Design conference in 2022</h4>

                                            <div className="blog">
                                               varaity of card design..
                                            </div> 
                                            
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                                    <div className="portfolio-card">
                                        <div className="inner-blog">
                                            <img src="./assets/image/india food.png" className="card-img-top" />
                                        </div>
                                        
                                        <div className="card-body">
                                            <div className="card-blog">
                                                Design .Fab 23,2022
                                            </div>
                                            <h4 className="text-conference">Design conference in 2022</h4>

                                            <div className="blog">
                                               varaity of card design..
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
export default Blog;
