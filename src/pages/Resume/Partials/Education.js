function Education () {

    let educations = [
        {
            name: "Central womens university",
            year: "2020 — 2022",
            description: "I'm doing MBA in Human Resourse Management (HRM)"
            
        },

        {
            name: " Central Womens University",
            year: "2016 — 2020",
            description: "I have complited my graduation(B.A) degree in English Language and Literature",
            
        },

        {
            name: "Chandpur Govt Womens College",
            year: "2013 — 2015",
            description: "I have complited my HSC from commerce background."
            
        },
            
        {
            name: "Lady Protima Girls High School",
            year: "2011 — 2012",
            description: "I have complited my SSC from commerce background.",
            
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
                    <div className="tl-item active" key={`education-${index}`}>
                        <div className={'tl-dot b-primary px-5 ms-3 ' + (index == 0 ? 'mt-4' : '' )}></div>
                        <div className="tl-content">
                            <div>
                                <div className="mt-4 fw-bold fs-5">{education.name}</div>
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

