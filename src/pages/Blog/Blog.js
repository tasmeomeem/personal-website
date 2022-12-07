import { useEffect, useState } from 'react';
import Layout from './../../components/Layout/Layout';
import BlogCard from '../../components/Card/BlogCard';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    let blogApi = 'https://dev.to/api/articles?tag=webdesign';

    useEffect(() => {
        fetch(blogApi)
            .then((response) => response.json())
            .then((result) => {
                let items = result.map((blog) => {
                    return {
                        img: blog.cover_image ?? blog.social_image ?? 'https://via.placeholder.com/400x200/1e1e1f?text=Image',
                        title: blog.title,
                        url:blog.url,
                        description: blog.description,
                        created_at: blog.published_at,
                    };
                });

                setBlogs(items);
            });
    }, []);

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
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6" key={`blog-card-${index}`}>
                                <BlogCard
                                    img={blog.img}
                                    title={blog.title}
                                    url={blog.url}
                                    description={blog.description}
                                    created_at={blog.created_at}
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
