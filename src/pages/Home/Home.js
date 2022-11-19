import Layout from './../../components/Layout/Layout'
import Service from './Partials/Service.js'
import Testimonial from './Partials/Testimonial.js'
import  Clients from './Partials/Clients'

function Home() {
    return (
        <>
            <Layout>
                <div>
                    <div className="about px-5">
                        <h1 className="fw-bold">About Me</h1>
                        <div className="heading-border"></div>

                        <div className="text mt-4">
                            I'm Creative Director and UI/UX Designer from Sydney,
                            Australia, working in web development and print media.
                            I enjoy turning complex problems into simple,
                            beautiful and intuitive designs.
                            My job is to build your website so that it is functional
                            and user-friendly but at the same time attractive. Moreover,
                            I add personal touch to your product and make sure that is
                            eye-catching and easy to use. My aim is to bring across your
                            message and identity in the most creative way.
                            I created web design for many famous brand companies.
                        </div>
                    </div>
                
                    <Service />

                    <Testimonial />

                    <Clients />
                </div>  
            </Layout>   
        </>
    );
}

export default Home;
