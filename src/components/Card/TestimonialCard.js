function TestimonialCard (props) {
	return (
		<>
           <div className="card-testmonials" data-bs-toggle="modal" data-bs-target={'#' + props.modal_id}>
                <div className="card-body">
                    <div className="card-testmonials-top gap-3" >
                        <img className="card-image-testmonials" width="100" height="150" src={props.img}/>
                        <div>
                            <div className="card-title fw-bold">{props.title}</div>
                            <div className="card-designation  mb-3">{props.designation}</div>
                        </div>
                    </div>

                    <div className="text-card-testmonials" style={{minHeight: "70px"}}>
                        <p className="card-text-testmonials fs-6">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;
