import { __ } from '@wordpress/i18n';
import './editor.scss';
import { InnerBlocks } from '@wordpress/block-editor';
import controls from './style-controls/controls.json';
import { PanelBody, PanelRow, FormToggle } from '@wordpress/components';
import { withDispatch, withSelect } from "@wordpress/data";
import { compose } from "@wordpress/compose";


function Edit(props) {
	const { clientId, closeChildToggles } = props;
	const wrapperClass = 'ep__fb_wrapper_' + clientId;
	const { id, openOneAtTime } = props.attributes;
	const { SwitchSidebar, RenderMultiStyles, InspectorControls, RenderStyles } = editorPlus.components;

	props.setAttributes({
		id: wrapperClass
	});

	const template = [
		[
			'create-block/accordion-item', // block slug
			{}, // attributes
			[] // inner blocks
		]
	];

	return (
		<div className={wrapperClass}>
			<div className="cwp_accordion_wrapper">
				<InnerBlocks template={template} allowedBlocks={[ 'create-block/accordion-item' ]} />
			</div>

			<InspectorControls clientId={props.clientId}>
				<PanelBody title="General">
					<PanelRow>
					<span>Open One Time</span>	
					<FormToggle 
					 checked={openOneAtTime} 
					 onChange={() => {

						// if ( !openOneAtTime ) {
						// 	closeChildToggles();
						// }

						props.setAttributes({ openOneAtTime: !openOneAtTime })
					 }}
					/>
					</PanelRow>
				</PanelBody>

				<PanelBody title="Design">
					<SwitchSidebar label="Title" id="title">
						<RenderMultiStyles
							initialOpen={false}
							title="Typography"
							groups={[
								{
									name: 'titleTypography',
									options: controls.titleTypography
								}
							]}
						/>
						<RenderMultiStyles
							initialOpen={false}
							title="Background"
							groups={[
								{
									name: 'Background',
									options: controls.titleBackground
								},
								{
									name: 'Active Background',
									options: controls.titleHoverBackground
								}
							]}
						/>

						<RenderMultiStyles
							initialOpen={false}
							title="Spacing"
							groups={[
								{
									name: 'Padding',
									options: controls.titlePadding
								}
							]}
						/>
					</SwitchSidebar>
					<SwitchSidebar label="Content" id="title">
						<RenderMultiStyles
							initialOpen={false}
							title="Background"
							groups={[
								{
									name: 'Content Background',
									options: controls.contentBackground
								}
							]}
						/>
						<RenderMultiStyles
							initialOpen={false}
							title="Padding"
							groups={[
								{
									name: 'Content Padding',
									options: controls.contentPadding
								}
							]}
						/>
					</SwitchSidebar>
					<SwitchSidebar label="Block" id="title">
						<RenderMultiStyles
							initialOpen={false}
							title="Typography"
							groups={[
								{
									name: 'titleTypography',
									options: controls.titleTypography
								}
							]}
						/>

						<RenderMultiStyles
							initialOpen={false}
							title="Background"
							groups={[
								{
									name: 'titleTypography',
									options: controls.titleTypography
								}
							]}
						/>
					</SwitchSidebar>
				</PanelBody>
			</InspectorControls>
			<RenderStyles wrapperClass={wrapperClass} clientId={props.clientId} />
		</div>
	);
}


export default compose([
	withSelect((select, { clientId }) => {
		const { getBlock } = select('core/block-editor');
		return {
			currentBlock: getBlock( clientId )
		}

	}),
	withDispatch((dispatch, { clientId, currentBlock }) => {
		
		const { updateBlockAttributes } = dispatch('core/block-editor');

		return {

			/**
			 * Will close all child toggles
			 */

			closeChildToggles() {
                 
				if (typeof currentBlock.innerBlocks === 'undefined') return;
				
				currentBlock.innerBlocks.forEach(( childBlock ) => {

					updateBlockAttributes(childBlock.clientId, { isOpen: false });

				})
			}
		}
	})
])(Edit);
