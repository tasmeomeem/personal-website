function ServiceCard (props) {
	return (
		<>	
            <div className="card text-center text-sm-start">
                <div className="card-body d-sm-flex ">
                    <div>
                        <i  className={"fs-1  service-icon "+ props.icon}></i>
                    </div>
                    <div className="text-card pt-3">
                        <h4 className="card-title fw-bold">{props.title}</h4>
                        <p className="card-text fs-6" style={{minHeight: "80px"}}>{props.description}</p>
                    </div>
                </div>
            </div> 
		</>
	);
}

export default ServiceCard;
