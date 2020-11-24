
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import './style.scss';

import Edit from './edit';
import save from './save';
import EditChild from './child/edit-child';
import saveChild from './child/save-child';

import controls from './style-controls/controls.json';


const STYLING_CONTROLS_SCHEMA = {
	type: "object",
	default: {}
}


// Parent Block
registerBlockType( 'create-block/accordion-block', {
	
	title: __( 'Accordion Block', 'accordion-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'accordion-block'
	),

	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		epStylingOptions: {
			type: "object",
			default: controls
		},
  
		// wrapper class
		id: {
		  type: "string",
		  default: ""
		},

		openOneAtTime: {
		  type: 'boolean',
		  default: false,
		},

		// custom attribute
		titleTypography: STYLING_CONTROLS_SCHEMA,
		titleBackground: STYLING_CONTROLS_SCHEMA,
		titleHoverBackground:STYLING_CONTROLS_SCHEMA,
		titlePadding: STYLING_CONTROLS_SCHEMA,
		contentBackground: STYLING_CONTROLS_SCHEMA,
		contentPadding: STYLING_CONTROLS_SCHEMA
		

	},

	edit: Edit,
	save,
});

// Child Block
registerBlockType( 'create-block/accordion-item', {
	
	title: __( 'Item', 'accordion-block' ),
	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'accordion-item'
	),
	category: 'widgets',
	icon: 'smiley',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	attributes: {
		epStylingOptions: {
			type: "object",
			default: controls
		},
  
		// wrapper class
		id: {
		  type: "string",
		  default: ""
		},

		accordionTitle: {
			type: 'string',
			default: 'Accordion Title', 
		},
		isOpen: {
			type: "boolean",
			default: false
		}
	},

	edit: EditChild,
	save: saveChild,
	parents: [ 'create-block/accordion-block' ]
});
