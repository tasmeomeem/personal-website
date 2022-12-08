import Layout from './../../components/Layout/Layout';
import Service from './Partials/Service.js';
import Testimonial from './Partials/Testimonial.js';
import  Client from './Partials/Client';

function Home() {
    return (
        <>
            <Layout>
                <div>
                    <div className="about px-5">
                        <h1 className="fw-bold">About Me</h1>
                        <div className="heading-border"></div>

                        <div className="about-text mt-4">
                            I'm Creative React Developer from Brandecy,
                            Bangladesh, working in as a web designer and frontend Developer.
                            I enjoy turning complex problems into simple,
                            beautiful and intuitive designs.
                            My job is to build your website so that it is functional
                            and user-friendly but at the same time attractive. Moreover,
                            I add personal touch to your site and make sure that is
                            eye-catching and easy to use. My aim is to bring across your
                            message and identity in the most creative way.
                            I created web design for some famous brand companies.
                        </div>
                    </div>
                    <Service />

                    <Testimonial />

                    <Client />
                </div>
            </Layout>
        </>
    );
}

export default Home;
