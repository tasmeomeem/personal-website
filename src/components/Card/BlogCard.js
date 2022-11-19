function BlogCard (props) {
	return (
		<>	
            <div className="blog-card">
                <div className="inner-blog">
                    <img src={props.img} className="card-img-top" />
                </div>

                <div className="card-body">
                    <div className="card-blog">
                        {props.title}
                    </div>
                    <h4 className="text-conference">{props.description}</h4>

                    <div className="blog">
                        {props.blog}
                    </div>

                </div>
            </div>
		</>
	);
}

export default BlogCard;