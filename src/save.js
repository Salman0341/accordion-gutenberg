import { __ } from '@wordpress/i18n';
import { InnerBlocks } from '@wordpress/block-editor';
const { RenderSavedStyles } = editorPlus.components;


 function save(props) {
	const {id} = props.attributes;
	console.log('parent id', id);
	return (
		<div className={id}>
			<div className="cwp_accordion_wrapper" data-id={id}>
			<InnerBlocks.Content/>
			<RenderSavedStyles {...props}/>
			</div>
		</div>

	);
}

export default save;
