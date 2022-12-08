import Button from './../UI/Button'

function Sidebar() {
    return (
        <>
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3">
                <div className="card card-body mt-5">
                    <div className="sidebar position-relative mt-2 py-5 px-4">
                        <div className="position-absolute top-0 end-0">
                            <button
                                type="button"
                                className="show-contact btn btn-light btn-sm"
                                data-bs-toggle="collapse"
                                data-bs-target="#contact-info"
                                aria-expanded="false"
                                aria-controls="contact-info">
                                Show Contacts
                            </button>
                        </div>

                        <div className="d-flex justify-content-center rounded-circle">
                            <div className="user-image">
                                <img className="image" src="./assets/image/meem.jpg" />
                            </div>
                        </div>

                        <div className="mt-5 fs-4 fw-bold">
                            Tasmeo Ahamed Meem
                        </div>

                        <div className=" button-layout mt-3">
                            <Button className="btn-sm fs-6" text="Web Developer" />
                        </div>

                        <div className="collapse d-xl-block" id="contact-info">
                            <div className="separator mt-4"></div>

                            <div className="d-flex gap-3 align-item-center mt-3">
                                <div className="social-icon">
                                    <i className="fa-regular fa-envelope ms-3"></i>
                                </div>

                                <div className="text-start">
                                    <div className="text-muted ms-3">
                                        EMAIL
                                    </div>

                                    <div className="ms-3">
                                        tasmeomeem.dev@
                                        gmail.com
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-3 align-item-center mt-3">
                                <div className="social-icon">
                                    <i className="fa-solid fa-calendar-days"></i>
                                </div>

                                <div className="text-start">
                                    <div className="text-muted">
                                        BIRTHDAY
                                    </div>

                                    <div>
                                        sep 17, 1996
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-3 align-item-center mt-3">
                                <div className="social-icon">
                                    <i className="fa-solid fa-phone"></i>
                                </div>

                                <div className="text-start  fs-6">
                                    <div className="text-muted">
                                        PHONE
                                    </div>

                                    <div>
                                        +8801323721771
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex gap-3 align-item-center mt-3">
                                <div className="social-icon">
                                    <i className="fa-sharp fa-solid fa-location-dot"></i>
                                </div>

                                <div className="text-start fs-6">
                                    <div className="text-muted">
                                        LOCATION
                                    </div>

                                    <div>
                                        Dhaka Bangladesh
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
export default Sidebar;
