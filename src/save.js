import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
const { RenderSavedStyles } = editorPlus.components;


 function save(props) {
	const {id, openOneAtTime } = props.attributes;
	console.log('Open ', openOneAtTime);
	return (
		<div className={id}>
			<div className="cwp_accordion_wrapper" data-open={openOneAtTime}>
			<InnerBlocks.Content/>
			<RenderSavedStyles {...props}/>
			</div>
		</div>

	);
}

export default save;
