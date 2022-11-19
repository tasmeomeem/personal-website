function PortfolioCard (props) {
	return (
		<>	
            <div className="portfolio-card">
                <div className="inner">
                    <img src={props.img} className="card-img-top" />
                </div>

                <div className="card-text mt-2 ms-1">
                    <div>
                        {props.title}
                    </div>
                    
                    <div className="text-muted">
                        {props.description}
                    </div>
                </div>
                
            </div>
		</>
	);
}

export default PortfolioCard;