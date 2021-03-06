import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from '@wordpress/compose';

function EditChild(props) {

    const { clientId } = props;
	const wrapperClass = 'ep__fb_wrapper_' + clientId;
    const { id, accordionTitle, isOpen } = props.attributes;

	useEffect(props.toggleSiblings, [isOpen]);

	props.setAttributes({
		id: wrapperClass
	});

    const ToggleOpenOneAtTime = ( id ) => {
		  props.setAttributes({ isOpen: !isOpen });	
	}

	return (
		<div className={wrapperClass}>
			<div className="cwp_accordion_item">
				<div className="cwp_title_wrapper" onClick={() => ToggleOpenOneAtTime(id)}>
					<span>
						<RichText
                            className="accordion_title"
							tagName="h3"
							value={accordionTitle}
							onChange={(newAccordionTitle) => props.setAttributes({ accordionTitle: newAccordionTitle })}
						/>
					</span>
					{isOpen ? <span class="dashicons dashicons-minus"></span> : <span class="dashicons dashicons-plus"></span>}

				</div>
				{isOpen && <div className="cwp_content_wrapper">
					<p> Accordion Content </p>
				</div>}
			</div>
		</div>
	);
}

export default compose([
  withSelect((select, {clientId} ) => {
	const { getBlock , getBlockRootClientId } = select('core/block-editor');
	
	const rootClientId = getBlockRootClientId(clientId);
	const rootBlock = getBlock(rootClientId);


	return {
      rootBlock
	}
  }),

  withDispatch((dispatch, {clientId, rootBlock, attributes}) => {
	const { updateBlockAttributes } = dispatch('core/block-editor');
	 
	return {
	  
		toggleSiblings() {
			const { isOpen } =  attributes;
			if(rootBlock.attributes.openOneAtTime) {

                 rootBlock.innerBlocks.forEach((childBlock) => {
                    if( childBlock.clientId !== clientId && isOpen) {
                        updateBlockAttributes(childBlock.clientId, {isOpen: false} );
					}
			   })
			}
		  }
	}
  })

]) (EditChild);


