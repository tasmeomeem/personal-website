function Button (props) {
	return (
		<>	
            <button type="button" className={'btn btn-secondary ' + props.className}>
                {props.text}
                {props.children}
            </button>
		</>
	);
}

export default Button;
