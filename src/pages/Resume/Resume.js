import { Link } from "react-router-dom";
import Layout from './../../components/Layout/Layout';
import  Skill from './Partials/Skill';
import Education from './Partials/Education';
import Experience from "./Partials/Experience";

function Resume() {
    return (
        <>
            <Layout>
                <div>
                    <div className="row px-5">
                        <div className="col-12">
                            <div className="resume fs-1 fw-bold text-light">
                                <div>
                                    Resume
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading-border ms-5"></div>
                    <Education />
        
                    <Experience />

                    <Skill />
                </div>
            </Layout>
                        
        </>
    );
}
export default Resume;
