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
            img: "./assets/image/mithu.jpg",
            designation: `Laravel developer of Cansoft`,
            title: "Mehediul Hassan Miton ",
            description: "She is honest and web expert. she is forever one member of our team.",
                                    
        },
        {
            modal_id: "testimonial-modal-2",
            img: "./assets/image/hridoy.jpg",
            title: "Rafiul Karim khan ",
            designation: "Product Manager of set's schedule.",
            description: "The best web developer I've ever worked with.React skill is good.",
            
        },
        {
            modal_id: "testimonial-modal-3",
            img: "../assets/image/arif.jpg",
            title: "Arif Hossain",
            designation: "Chairmen of Kashfulbd",
            description: "Outstanding React experience.",
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
                                    <SwiperSlide key={`testimonial-card-${index}`}>
                                        <TestimonialCard
                                            modal_id= {testimonial.modal_id}
                                            img={testimonial.img}
                                            title={testimonial.title}
                                            designation={testimonial.designation}
                                            description={testimonial.description}
                                        />
                                    </SwiperSlide>
                                )}
                            
                            </Swiper>

                                <div className="row px-5 mt-4 g-3">
                                    {testimonials.map((testimonial, index) =>
                                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6"key={`testimonial-card-${index}`}>
                                            <TestimonialModal
                                                modal_id={testimonial.modal_id}
                                                img={testimonial.img}
                                                title={testimonial.title}
                                                designation={testimonial.designation}
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
