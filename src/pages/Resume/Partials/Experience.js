function Experience () {

    let experiences = [
        {
            name: " Creative Director",
            year: "2015 — Present",
            description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti quos dolores et quas molestias exceptur."
            
        },

        {
            name: " Art Director",
            year: "2013 — 2015",
            description: "Ratione voluptatem sequi nesciunt facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
            
        },

        {
            name: " Web Designer",
            year: "2010 — 2015",
            description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti quos dolores et quas molestias exceptur."
            
        },
            
    ];
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
                    {experiences.map((experience, index) =>
                        <div className="tl-item active">
                            <div className={'tl-dot b-primary px-5 ms-3 ' + (index == 0 ? 'mt-4' : '' )}></div>
                            <div className="tl-content">
                                <div>
                                    <h5 className="mt-4">{experience.name}</h5>
                                    <div className="text">{experience.year}</div>
                                    <div className="description">{experience.description}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
export default Experience;