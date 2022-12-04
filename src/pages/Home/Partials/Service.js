import ServiceCard from './../../../components/Card/ServiceCard';

function Service () {
    let services = [
        {
            icon: "fa-brands fa-html5",
            title: "Web Design",
            description: `Web design is the planning of create a new things to reflect your work promently.`
        },
        {
            icon: "fa-brands fa-react",
            title: "Html to React",
            description: `React is a efficient, and flexible JavaScript library for building user interfaces.`
        },
        {
            icon: "fa-brands fa-figma",
            title: "PSD/Figma to HTML",
            description: `PSD files are the native file format of Adobe Photoshop.I can convert psd to HTML markup language.`, 
        },
        {
            icon: "fa-brands fa-bootstrap",
            title: "Bootstrap  Design",
            description: `Bootstrap is a free, open source front-end framework for the creation of websites and web apps.`,
        }
    ];

	return (
		<>	
            <div className="row">
                <div className="col-sm-12">
                    <div className="mt-4 px-5">
                        <h2 className="fw-bold">What I'm Doing </h2>
                    </div>
                </div>
            </div>

            <div className="row px-5 mt-4 g-3">
                {services.map((service, index) =>
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-6"key={`service-card-${index}`}>
                        <ServiceCard
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                )}
            </div>
		</>
	);
}

export default Service;