import TestimonialCard from './../../../components/Card/TestimonialCard'
import TestimonialModal from './../../../components/Modal/TestimonialModal'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Testimonial () {
    let testimonials = [
        {
            modal_id: "testimonial-modal-1",
            img: "./assets/image/avatar-1.png",
            title: "Daniel Lewis",
            description: "Richard was hired to create a corporate identity. We were very pleased with the work",
                                    
        },
        {
            modal_id: "testimonial-modal-2",
            img: "./assets/image/avatar-2.png",
            title: "jessica Miller",
            description: "Richard was hired to create a corporate identity. We were very pleased with the work",
        },
        {
            modal_id: "testimonial-modal-3",
            img: "../assets/image/avatar-3.png",
            title: "jessica Miller",
            description: "Richard was hired to create a corporate identity. We were very pleased with the work",
        },
    ];



	return (
		<>	
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
                                {testimonials.map((testimonial, index) =>   
                                    <SwiperSlide>
                                        <TestimonialCard
                                            modal_id= {testimonial.modal_id}
                                            img={testimonial.img}
                                            title={testimonial.title}
                                            description={testimonial.description}
                                        />
                                    </SwiperSlide>
                                )}
                            
                            </Swiper>

                                <div className="row px-5 mt-4 g-3">
                                    {testimonials.map((testimonial, index) =>
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                                            <TestimonialModal
                                                modal_id={testimonial.modal_id}
                                                img={testimonial.img}
                                                title={testimonial.title}
                                                description={testimonial.description}
                                            />
                                        </div>
                                    )}
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
		</>
	);
}

export default Testimonial;
