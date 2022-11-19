import ServiceCard from './../../../components/Card/ServiceCard'

function Service (){
	return (
		<>	
            <div className="row">
                <div className="col-sm-12">
                    <div className="mt-4 px-5">
                        <h2 className="fw-bold">What I'm Doing </h2>
                    </div>
                </div>
            </div>

            <div className="row px-5 mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <ServiceCard
                        img="./assets/image/icon-design.svg"
                        title="Web Design"
                        description="With supporting text below as a natural lead-in to additional content"
                    />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <ServiceCard
                        img="../assets/image/icon-dev.svg"
                        title="Web Developer"
                        description="With supporting text below as a natural lead-in to additional content."
                    />
                </div>
            </div>

            <div className="row px-5 mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <ServiceCard
                        img="../assets/image/icon-photo.svg"
                        title="Photography"
                        description="With supporting text below as a natural lead-in to additional content"
                    />
                </div>

                <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6">
                    <ServiceCard
                        img="./assets/image/icon-app.svg"
                        title="Mobile Apps"
                        description="With supporting text below as a natural lead-in to additional content."
                    />
                </div>
            </div>
		</>
	);
}

export default Service;