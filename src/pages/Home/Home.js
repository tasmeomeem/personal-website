import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Layout from './../../components/Layout/Layout'

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
                            <div className="card text-center text-sm-start">
                                <div className="card-body d-sm-flex ">
                                    <div>
                                        <img className="card-image" src="./assets/image/icon-design.svg" />
                                    </div>
                                    <div className="text-card pt-3">
                                        <h4 className="card-title fw-bold">Web Design</h4>
                                        <p className="card-text fs-6">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <div className="card text-center text-sm-start">
                                <div className="card-body d-sm-flex">
                                    <div>
                                        <img className="card-image" src="./assets/image/icon-dev.svg" />
                                    </div>
                                    <div className="text-card pt-3">
                                        <h4 className="card-title fw-bold">Web Development</h4>
                                        <p className="card-text fs-6">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row px-5 mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <div className="card text-center text-sm-start">
                                <div className="card-body d-sm-flex">
                                    <div>
                                        <img className="card-image" src="./assets/image/icon-app.svg" />
                                    </div>

                                    <div className="text-card pt-3">
                                        <h4 className="card-title fw-bold">Mobile Apps</h4>
                                        <p className="card-text fs-6">
                                            With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <div className="card text-center text-sm-start">
                                <div className="card-body d-sm-flex">
                                    <div>
                                        <img className="card-image" src="./assets/image/icon-photo.svg" />
                                    </div>
                                    <div className="text-card pt-3">
                                        <h4 className="card-title fw-bold">Photography</h4>
                                        <p className="card-text fs-6">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
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
                                <div className="modal fade" id="testimonial-modal-1">
                                    <div className="modal-dialog">
                                        <div className="modal-content bg-dark">
                                            <div className="modal-header">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                            </div>

                                            <div className="modal-body d-flex">
                                                <div className="pic">
                                                    <img className="" src="./assets/image/avatar-4.png" />
                                                    <img className="" src="./assets/image/icon-quote.svg" />
                                                </div>

                                                <div className="description">
                                                    <div className="modal-title-1">
                                                        <h4 className="fw-bold ms-3">Daniel Lewis</h4>
                                                    </div>

                                                    <div className="modal-title-2">
                                                        <h6>14 June, 2021</h6>

                                                    </div>

                                                    <div className="modal-description">
                                                        <p className="card-text-testmonials-modal"> Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.</p>
                                                    </div>
                                                </div>
                                            </div >
                                        </div>
                                    </div>
                                </div>
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
                                            <div className="card-testmonials" data-bs-toggle="modal" data-bs-target="#testimonial-modal-1">
                                                <div className="card-body">
                                                    <div className="card-testmonials-top">
                                                        <img className="card-image-testmonials" src="./assets/image/avatar-1.png" />
                                                        <h4 className="card-title fw-bold ms-3">Daniel Lewis</h4>
                                                    </div>
                                                    <div className="text-card-testmonials pt-3">
                                                        <p className="card-text-testmonials fs-6"> Richard was hired to create a corporate identity. We were very pleased with the work </p>
                                                    </div>
                                                </div>
                                            </div>


                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="card-testmonials ">
                                                <div className="card-body">
                                                    <div className="card-testmonials-top">
                                                        <img className="card-image-testmonials" src="./assets/image/avatar-2.png" />
                                                        <h4 className="card-title fw-bold ms-3">Jessica Miller</h4>
                                                    </div>
                                                    <div className="text-card-testmonials pt-3">
                                                        <p className="card-text-testmonials fs-6">Richard was hired to create a corporate identity. We were very pleased with the work </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="card-testmonials ">
                                                <div className="card-body">
                                                    <div className="card-testmonials-top">
                                                        <img className="card-image-testmonials" src="./assets/image/avatar-3.png" />
                                                        <h4 className="card-title fw-bold ms-3">Jessica Miller</h4>
                                                    </div>
                                                    <div className="text-card-testmonials pt-3">
                                                        <p className="card-text-testmonials fs-6">Richard was hired to create a corporate identity. We were very pleased with the work </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
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
