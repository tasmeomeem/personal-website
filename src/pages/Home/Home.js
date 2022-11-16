import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Layout from './../../components/Layout/Layout';
import ServiceCard from './../../components/Card/ServiceCard';
import TestimonialCard from './../../components/Card/TestimonialCard';
import TestimonialModal from '../../components/Modal/TestimonialModal';

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

                    <div className="row">
                        <div className="col-sm-12">
                            <div className="mt-4 px-5">
                                <h2 className="fw-bold">What I'm Doing </h2>
                            </div>
                        </div>
                    </div>

                    <div className="row px-5 mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <ServiceCard
                                img="./assets/image/icon-design.svg" 
                                title="Web Design" 
                                description="With supporting text below as a natural lead-in to additional content"
                            />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <ServiceCard
                                img="../assets/image/icon-dev.svg" 
                                title="Web Developer" 
                                description="With supporting text below as a natural lead-in to additional content."
                            />
                        </div>
                    </div>

                    <div className="row px-5 mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <ServiceCard
                                img="../assets/image/icon-photo.svg" 
                                title="Photography" 
                                description="With supporting text below as a natural lead-in to additional content"
                            />
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <ServiceCard
                                img="./assets/image/icon-app.svg" 
                                title="Mobile Apps" 
                                description="With supporting text below as a natural lead-in to additional content."
                            />
                        </div>
                    </div>

                    

                    <div className="row p-5">
                        <div className="col-sm-12">
                            <div className="testmonials">
                                <h2 className="fw-bold">Testimonials</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row ">
                        <div className=" col-12 ">
                            <div className="container">
                                <div className="testimonial-slider">
                                    <Swiper
                                        module={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={20}
                                        slidesPerView={2}
                                        navigation={false}
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true }}
                                        onSwiper={(Swiper) => console.log(Swiper)}
                                        breakpoints={
                                            {
                                                0: {
                                                    slidesPerView: 1,
                                                },
                                                1024: {
                                                    slidesPerView: 2,
                                                },
                                            }
                                        }
                                    >
                                        <SwiperSlide>
                                            <TestimonialCard
                                                modal_id="testimonial-modal-1"
                                                img="./assets/image/avatar-1.png"
                                                title="Daniel Lewis"
                                                description="Richard was hired to create a corporate identity. We were very pleased with the work"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <TestimonialCard
                                                modal_id="testimonial-modal-2"
                                                img="./assets/image/avatar-2.png"
                                                title="jessica Miller"
                                                description="Richard was hired to create a corporate identity. We were very pleased with the work"
                                            />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <TestimonialCard
                                                modal_id="testimonial-modal-3"
                                                img="../assets/image/avatar-3.png"
                                                title="jessica Miller"
                                                description="Richard was hired to create a corporate identity. We were very pleased with the work"
                                            />
                                        </SwiperSlide>
                                    </Swiper>

                                    <TestimonialModal
                                        modal_id="testimonial-modal-1"
                                        img="./assets/image/avatar-1.png"
                                        title="Daniel Lewis"
                                        description="Richard was hired to create a corporate identity. We were very pleased with the work"
                                        created_at="14 June, 2021"
                                    />

                                    <TestimonialModal
                                        modal_id="testimonial-modal-2"
                                        img="./assets/image/avatar-2.png"
                                        title="jessica Miller"
                                        description="Richard was hired to create a corporate identity. We were very pleased with the work"
                                        created_at="14 June, 2021"
                                    />

                                    <TestimonialModal
                                        modal_id="testimonial-modal-3"
                                        img="../assets/image/avatar-3.png"
                                        title="jessica Miller"
                                        description="Richard was hired to create a corporate identity. We were very pleased with the work"
                                        created_at="14 June, 2021"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className=" col-12 ">
                            <div className="container">
                                <div className="clients fw-bold fs-2 ">
                                    Clients
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className=" col-sm-12 ">
                            <div className="container">
                                <div className="testimonial-slider py-5">
                                    <Swiper
                                        module={[Navigation, Pagination, Scrollbar, A11y]}
                                        spaceBetween={20}
                                        navigation={false}
                                        pagination={{ clickable: true }}
                                        scrollbar={{ draggable: true, dragSize: 50 }}
                                        onSwiper={(Swiper) => console.log(Swiper)}
                                        
                                        breakpoints={
                                            {
                                                900: {
                                                    slidesPerView: 1,
                                                },
                                                1024: {
                                                    slidesPerView: 2,
                                                },
                                                1400: {
                                                    slidesPerView: 3,
                                                }
                                            }
                                        }

                                    >
                                        <SwiperSlide>
                                            <img src="./assets/image/logo-1-color.png" />
                                            <p></p>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src="./assets/image/logo-2-color.png" />
                                            <p></p>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src="./assets/image/logo-3-color.png" />
                                            <p></p>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src="./assets/image/logo-4-color.png" />
                                            <p></p>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src="./assets/image/logo-5-color.png" />
                                            <p></p>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <img src="./assets/image/logo-6-color.png " />
                                            <p></p>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </Layout>   
        </>
    );
}

export default Home;
