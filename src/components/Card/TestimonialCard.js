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

            <div className="modal fade" id={props.modal_id}>
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                        <div className="modal-body d-flex">
                            <div className="pic">
                                <img className="" src={props.img} />
                                <img className="" src="./assets/image/icon-quote.svg" />
                            </div>

                            <div className="description">
                                <div className="modal-title-1">
                                    <h4 className="fw-bold ms-3">{props.title}</h4>
                                </div>

                                <div className="modal-title-2">
                                    <h6>{props.created_at}</h6>

                                </div>

                                <div className="modal-description">
                                    <p className="card-text-testmonials-modal">{props.description}</p>
                                </div>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        </>
    );
}

export default TestimonialCard;