function Skill(){
    return (
        <>
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
                                <div className="progress-bar" style={{ width: '80%' }}></div>
                            </div>
                        </div>

                        <div className="graphic Design fs-6 fw-bold p-3">
                            Graphic Design 70%
                        </div>

                        <div className="px-3">
                            <div className="progress progress-skill">
                                <div className="progress-bar" style={{ width: '60%' }}></div>
                            </div>
                        </div>

                        <div className="branding fs-6 fw-bold p-3">
                            Branding 90%
                        </div>

                        <div className="px-3">
                            <div className="progress progress-skill">
                                <div className="progress-bar" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                        <div className="word press fs-6 fw-bold p-3">
                            WordPress 50%
                        </div>

                        <div className="px-3">
                            <div className="progress progress-skill ">
                                <div className="progress-bar" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
                                
        </>
    );
}
export default Skill;

