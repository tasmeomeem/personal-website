function Experience(){
    return (
        <>
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
        </>
    );
}
export default Experience;