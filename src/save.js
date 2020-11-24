import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
const { RenderSavedStyles } = editorPlus.components;


 function save(props) {
	return (
		<div className={props.attributes.id}>
			<div className="cwp_accordion_wrapper">
			<InnerBlocks.Content/>
			<RenderSavedStyles {...props}/>
			</div>
		</div>

	);
}

export default save;
