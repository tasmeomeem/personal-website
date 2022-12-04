import { Link } from "react-router-dom";
import Layout from './../../components/Layout/Layout'
import Button from './../../components/UI/Button'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [massage, setMassage] = useState();

    const handleNameInput = (event) => setName(event.target.value);
    const handleEmailInput = (event) => setEmail(event.target.value);
    const handleMassageInput = (event) => setMassage(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_0cubvqm', 'template_ufkdp41', form.current, 'GM2POGnDaYECm8BUh')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        event.target.reset()
    }

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
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.
                                        38703692693!2d90.27919586057241!3d23.780573258035947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                                        1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!
                                        2sbd!4v1669762421386!5m2!1sen!2sbd" width="100%" height="450" 
                                        allow="fullscreen" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="row p-5">
                                <div className="col-6">
                                    <div className="">
                                        <input name="name" onChange={(event) => handleNameInput(event)} type="text" className="form-control " placeholder="Full Name" required />
                                    </div>
                                </div>

                                <div className="col-6">
                                    <input name="email" onChange={(event) => handleEmailInput(event)} type="text" className="form-control" placeholder="Email" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="px-5">
                                        <textarea name="massage" onChange={(event) => handleMassageInput(event)} className="form-control" placeholder="Your Massege" required></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="text-end me-5 mt-4">
                                        <Button type="submit" className="button-contact">
                                            <i className="fa-regular fa-paper-plane me-2"></i>
                                            Your massege
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Contact;