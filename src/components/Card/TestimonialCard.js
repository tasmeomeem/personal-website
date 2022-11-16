function TestimonialCard (props) {
	return (
		<>
           <div className="card-testmonials" data-bs-toggle="modal" data-bs-target={'#' + props.modal_id}>
                <div className="card-body">
                    <div className="card-testmonials-top">
                        <img className="card-image-testmonials" src={props.img}/>
                        <h4 className="card-title fw-bold ms-3">{props.title}</h4>
                    </div>
                    <div className="text-card-testmonials pt-3">
                        <p className="card-text-testmonials fs-6">{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;
