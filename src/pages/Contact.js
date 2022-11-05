import Header from '../components/Header';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Menu from '../components/Menu';

function Contact() {
    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <Sidebar />

                    <div className="col-sm-12 col-md-12 col-xl-9">
                        <div className="front-side mt-5 pb-5">
                            <Menu />

                            <div className="row px-4">
                                <div className="col-12">
                                    <div className="resume fs-2 fw-bold text-light">
                                        <div className="ms-3 mb-2">
                                            Contact
                                        </div>

                                        <div className="heading-border ms-4"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="map p-5">
                                        <div>
                                            <iframe src="https://www.google.com/maps/embed?pb=
                                                !1m18!1m12!1m3!1d6509916.957423575!2d-123.79759793610344!3d37.18430344877116!
                                                2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!
                                                2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1667247016730!5m2!1sen!2sbd" 
                                                width="100%" height="450" allowFullScreen="" loading="lazy" 
                                                referrerPolicy="no-referrer-when-downgrade">
                                            </iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <form>
                                    <div class="row p-5">
                                        <div className="col-6">
                                            <div className="">
                                                <input type="text" className="form-control " placeholder="Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-6">
                                            <input type="text" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="px-5">
                                                <textarea className="form-control" placeholder="Your Massege"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="text-end me-5 mt-4">
                                        <button type="button" className="btn btn-secondary button-contact"><i className="fa-regular fa-arrow-pointer"></i>
                                            Your massege
                                        </button>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}
export default Contact;