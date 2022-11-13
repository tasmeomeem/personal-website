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

                        <div className="d-flex justify-content-center ">
                            <div className="user-image">
                                <img className="image" src="./assets/image/avatar.png" />
                            </div>
                        </div>

                        <div className="mt-4 fs-4 fw-bold">
                            Richard hanrick
                        </div>

                        <div className="mt-3">
                            <button type="button" className="btn btn-secondary btn-sm fs-6">Web Developer</button>
                        </div>

                        <div className="collapse d-xl-block" id="contact-info">
                            <div className="separator mt-4"></div>

                            <div className="d-flex gap-3 align-item-center mt-3">
                                <div className="social-icon">
                                    <i className="fa-regular fa-envelope"></i>
                                </div>

                                <div className="text-start">
                                    <div className="text-muted">
                                        EMAIL
                                    </div>

                                    <div>
                                        richard@example.com...
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
                                        June 23, 1982
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
                                        +1 (213) 352-2795
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
                                        Sacramento, California, USA
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
