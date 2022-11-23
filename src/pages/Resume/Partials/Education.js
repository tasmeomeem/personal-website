function Education () {

    let educations = [
        {
            name: " University School Of The Arts",
            year: "2007 — 2008",
            description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti quos dolores et quas molestias exceptur."
            
        },

        {
            name: " New York Academy Of Art",
            year: "2006 — 2007",
            description: "Ratione voluptatem sequi nesciunt facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
            
        },

        {
            name: " High School Of Art And Design",
            year: "2002 — 2004",
            description: "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti quos dolores et quas molestias exceptur."
            
        },
            
        {
            name: " University School Of The Arts",
            year: "2007 — 2008",
            description: "Duis aute irure dolor in reprehenderit in voluptate quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
            
        },
    ];
    return (
        <>
            <div className="px-4 d-flex mt-5">
                <div className="social-icon ms-4">
                    <i className="fa-regular fa-book-open"></i>
                </div>
                <div className="education fs-3 fw-bold text-lights ms-4">
                    Education
                </div>
            </div>
                    
            <div className="timeline  block mb-4">
                {educations.map((education, index) =>
                    <div className="tl-item active">
                        <div className={'tl-dot b-primary px-5 ms-3 ' + (index == 0 ? 'mt-4' : '' )}></div>
                        <div className="tl-content">
                            <div>
                                <h5 className="mt-4">{education.name}</h5>
                                <div className="text">{education.year}</div>
                                <div className="description">{education.description}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Education;

