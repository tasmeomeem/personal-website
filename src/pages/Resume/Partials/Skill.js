function Skill () {

    let skills = [
        {
            name: " HTML",
            persentage: "90%",
        },
        {
            name: " CSS",
            persentage: "70%",
        },
        {
            name: " Bootstrap",
            persentage: "90%",
        },
        {
            name: "Java script",
            persentage: "80%",
        },

        {
            name: "Jquery",
            persentage: "60%",
        },

        {
            name: "React",
            persentage: "80%",
        },
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
                            <div key={`skill-${index}`}>
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


