import { Link } from "react-router-dom";
import Layout from './../../components/Layout/Layout'

function Resume() {
    return (
        <>
            <Layout>
                <div>
                    <div className="row px-4">
                        <div className="col-12">
                            <div className="resume fs-2 fw-bold text-light">
                                <div>
                                    Resume
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading-border ms-4"></div>

                    <div>
                        <div className="px-3 d-flex mt-5">
                            <div className="social-icon">
                                <i className="fa-regular fa-book-open"></i>
                            </div>
                            <div className="education fs-4 fw-bold text-lights ms-3">
                                Education
                            </div>
                        </div>

                        <div className="timeline  block mb-4">
                            <div className="tl-item active">
                                <div className="tl-dot b-primary px-5 mt-4 ms-3"></div>
                                <div className="tl-content">
                                    <h5 className="mt-4">University School Of The Arts</h5>
                                    <div className="text">2007 — 2008</div>
                                    <div className="">
                                        Nemo enims ipsam voluptatem, blanditiis praesentium 
                                        voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                                    </div>
                                </div>
                            </div>
                    

                            <div className="tl-item active">
                                <div className="tl-dot b-warning px-5 ms-3"></div>
                                <div className="tl-content">
                                    <h5>New York Academy Of Art</h5>
                                    <div className="text">2006 — 2007</div>
                                    <div className="">
                                        Ratione voluptatem sequi nesciunt, 
                                        facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.
                                    </div> 
                                </div>
                            </div>

                            <div className="tl-item active">
                                <div className="tl-dot b-warning px-5 ms-3"></div>
                                <div className="tl-content">
                                    <h5>High School Of Art And Design </h5>
                                    <div className="text">2002 — 2004</div>
                                    <div className="">
                                        Duis aute irure dolor in reprehenderit in voluptate,
                                        quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="px-5 d-flex mt-5">
                            <div className="social-icon">
                                <i className="fa-regular fa-book-open"></i>
                            </div>
                            <div className="experience fs-4 fw-bold text-lights ms-3">
                                Experience
                            </div>
                        </div>

                        <div className="timeline  block mb-4">
                            <div className="tl-item active">
                                <div className="tl-dot b-primary px-5 mt-4 ms-3"></div>
                                <div className="tl-content">
                                    <h5 className="mt-4">Creative Director</h5>
                                    <div className="text">2015 — Present</div>
                                    <div className="">
                                        Nemo enim ipsam voluptatem blanditiis praesentium 
                                        voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.
                                    </div>
                                </div>
                            </div>
                    

                            <div className="tl-item active">
                                <div className="tl-dot b-warning px-5 ms-3"></div>
                                <div className="tl-content">
                                    <h5>Art Director</h5>
                                    <div className="text">2013 — 2015</div>
                                    <div className="">
                                        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit 
                                        atque corrupti, quos dolores et quas molestias exceptur.
                                    </div> 
                                </div>
                            </div>

                            <div className="tl-item active">
                                <div className="tl-dot b-warning px-5 ms-3"></div>
                                <div className="tl-content">
                                    <h5>Web Designer</h5>
                                    <div className="text">2010 — 2013</div>
                                    <div className="">
                                        Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque 
                                        corrupti, quos dolores et quas molestias exceptur.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="skill fs-3 fw-bold px-4">
                        My Skills
                    </div>

                    <div className="col-12 p-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="web design fs-6 fw-bold p-2">
                                    Web Design 80%    
                                </div>

                                <div className="px-3">
                                    <div className="progress progress-skill">
                                            <div className="progress-bar" style={{width: '80%'}}></div>
                                    </div>
                                </div>

                                <div className="graphic Design fs-6 fw-bold p-3">
                                    Graphic Design 70%
                                </div>

                                <div className="px-3">
                                    <div className="progress progress-skill">
                                        <div className="progress-bar" style={{width: '60%'}}></div>
                                    </div>
                                </div>

                                <div className="branding fs-6 fw-bold p-3">
                                    Branding 90%
                                </div>

                                <div className="px-3">
                                    <div className="progress progress-skill">
                                        <div className="progress-bar" style={{width: '90%'}}></div>
                                    </div>
                                </div>

                                <div className="word press fs-6 fw-bold p-3">
                                    WordPress 50%
                                </div>

                                <div className="px-3">
                                    <div className="progress progress-skill ">
                                        <div className="progress-bar" style={{width: '70%'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </Layout>
                        
        </>
    );
}
export default Resume;