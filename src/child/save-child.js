function saveChild(props) {
	const { id, accordionTitle } = props.attributes;


	return (
		<div className={id}>
			<div className="cwp_accordion_item">
				<div className="cwp_title_wrapper">
					<span
						dangerouslySetInnerHTML={{
							__html: accordionTitle
						}}
					/>
					<span class="dashicons dashicons-plus" />
				</div>
				<div class="cwp_content_wrapper">
					<p> Accordion Content </p>
				</div>
			</div>
		</div>
	);
}

export default saveChild;
