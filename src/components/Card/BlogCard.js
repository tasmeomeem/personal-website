import moment from 'moment';

function BlogCard (props) {
	return (
		<>
            <div className="blog-card">
                <div className="inner-blog">
                    <img src={props.img} className="card-img-top" />
                </div>

                <div className="card-body">
                    <a className="text-conference" target="_blank" href={props.url}>
                        <h4>{props.title}</h4>
                    </a>

                    <div className="card-blog">
                        {props.description.substring(0, 200)}...
                    </div>

                    <div className="blog">
                        {moment(props.created_at).format('MMM DD, YYYY')}
                    </div>
                </div>
            </div>
		</>
	);
}

export default BlogCard;