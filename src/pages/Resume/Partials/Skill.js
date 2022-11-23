function Skill () {

    let skills = [
        {
            name: " Web Design",
            persentage: "80%",
            
        },
        {
            name: " Graphic Design",
            persentage: "70%",
        },
        {
            name: " Branding",
            persentage: "90%",
        },
            
        {
            name: "WordPress",
            persentage: "50%",
        }
    ];
    return (
        <>
            <div className="skill fs-3 fw-bold px-4">
                My Skills
            </div>

            
            <div className="col-12 p-3">
                <div className="card">
                    <div className="card-body">
                        {skills.map((skill, index) =>
                            <div>
                                <div className="web design fs-6 fw-bold p-2">
                                    {skill.name} {skill.persentage}
                                </div>

                                <div className="px-3">
                                    <div className="progress progress-skill">
                                        <div className="progress-bar" style={{ width: skill.persentage }}></div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}
export default Skill;


