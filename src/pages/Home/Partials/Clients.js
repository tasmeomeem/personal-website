import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

function Clients(){
    return (
        <>
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


        </>
    );
}
export default Clients;