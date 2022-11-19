import Layout from './../../components/Layout/Layout'
import  Education from './Partials/Education'
import  Experience from './Partials/Experience'
import  Skill from './Partials/Skill'


function Resume() {
    return (
        <>
            <Layout>
                <div>
                    <div className="row px-4">
                        <div className="col-12">
                            <div className="resume fs-2 fw-bold text-light">
                                <div>
                                    Resume
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="heading-border ms-4"></div>
                    <Education />

                    <Experience />

                    <Skill />
                </div>
            </Layout>
                        
        </>
    );
}
export default Resume;