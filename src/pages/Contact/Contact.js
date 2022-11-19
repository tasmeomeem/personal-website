import { Link } from "react-router-dom";
import Layout from './../../components/Layout/Layout'
import Button from './../../components/UI/Button'

function Contact() {
    return (
        <>
            <Layout>
                <div>
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
                            <Button className="button-contact">
                                <i class="fa-regular fa-paper-plane me-2"></i>
                                Your massege
                            </Button>   
                        </div>
                    </div>
                </div>
                </div>
            </Layout>
        </>
    );
}
export default Contact;