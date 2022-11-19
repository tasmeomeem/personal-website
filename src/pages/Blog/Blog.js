import Layout from './../../components/Layout/Layout';
import BlogCard from '../../components/Card/BlogCard';


function Blog() {
    return (
        <>
            <Layout>
                <div>
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

                    <div className="row px-5 mt-3">
                        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                            <BlogCard 
                                img="./assets/image/street food.png"
                                title="Design .Fab 23,2022"
                                description="Design conference in 2022"
                                blog="varaity of card design.."
                            
                            />
                        </div>

                        <div className="col-md-6 col-sm-12 col-lg-6 col-xl-6">
                            <BlogCard 
                                img="./assets/image/india food.png"
                                title="Design .Fab 23,2022"
                                description="Design conference in 2022"
                                blog="varaity of card design.."
                            
                            />
                        </div>
                    </div>
                </div>
            </Layout>      
        </>
    );
}
export default Blog;
