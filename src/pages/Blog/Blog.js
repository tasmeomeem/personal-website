import Layout from './../../components/Layout/Layout';
import BlogCard from '../../components/Card/BlogCard';


function Blog() {
    let api = 'http://api.mediastack.com/v1/news?access_key=b274f5127d8fe376c2600840f28376de&categories=technology&languages=en';
        
    let blogs = [
        {
            img: "./assets/image/street food.png",
            title: "Design .Fab 23,2022",
            description: "Design conference in 2022",
            blog: "varaity of card design.."
        },
        {
            img: "./assets/image/india food.png",
            title: "Design .Fab 23,2022",
            description: "Design conference in 2022",
            blog: "varaity of card design..",
        },
        
    ];

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
                        {blogs.map((blog, index) =>
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                <BlogCard
                                    img={blog.img}
                                    title={blog.title}
                                    description={blog.description}
                                    blog={blog.blog}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Layout>      
        </>
    );
}
export default Blog;
