(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/child/edit-child.js":
/*!*********************************!*\
  !*** ./src/child/edit-child.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);







function EditChild(props) {
  var clientId = props.clientId;
  var wrapperClass = 'ep__fb_wrapper_' + clientId;
  var _props$attributes = props.attributes,
      id = _props$attributes.id,
      accordionTitle = _props$attributes.accordionTitle,
      isOpen = _props$attributes.isOpen;
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(props.toggleSiblings, [isOpen]);
  props.setAttributes({
    id: wrapperClass
  });

  var ToggleOpenOneAtTime = function ToggleOpenOneAtTime(id) {
    props.setAttributes({
      isOpen: !isOpen
    });
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: wrapperClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_accordion_item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_title_wrapper",
    onClick: function onClick() {
      return ToggleOpenOneAtTime(id);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    className: "accordion_title",
    tagName: "h3",
    value: accordionTitle,
    onChange: function onChange(newAccordionTitle) {
      return props.setAttributes({
        accordionTitle: newAccordionTitle
      });
    }
  })), isOpen ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "dashicons dashicons-minus"
  }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "dashicons dashicons-plus"
  })), isOpen && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_content_wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, " Accordion Content "))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withSelect"])(function (select, _ref) {
  var clientId = _ref.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock,
      getBlockRootClientId = _select.getBlockRootClientId;

  var rootClientId = getBlockRootClientId(clientId);
  var rootBlock = getBlock(rootClientId);
  return {
    rootBlock: rootBlock
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__["withDispatch"])(function (dispatch, _ref2) {
  var clientId = _ref2.clientId,
      rootBlock = _ref2.rootBlock,
      attributes = _ref2.attributes;

  var _dispatch = dispatch('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  return {
    toggleSiblings: function toggleSiblings() {
      var isOpen = attributes.isOpen;

      if (rootBlock.attributes.openOneAtTime) {
        rootBlock.innerBlocks.forEach(function (childBlock) {
          if (childBlock.clientId !== clientId && isOpen) {
            updateBlockAttributes(childBlock.clientId, {
              isOpen: false
            });
          }
        });
      }
    }
  };
})])(EditChild));

/***/ }),

/***/ "./src/child/save-child.js":
/*!*********************************!*\
  !*** ./src/child/save-child.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function saveChild(props) {
  var _props$attributes = props.attributes,
      id = _props$attributes.id,
      accordionTitle = _props$attributes.accordionTitle;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_accordion_item"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_title_wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    dangerouslySetInnerHTML: {
      __html: accordionTitle
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    class: "dashicons dashicons-plus"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    class: "cwp_content_wrapper cwp_display"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, " Accordion Content "))));
}

/* harmony default export */ __webpack_exports__["default"] = (saveChild);

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-controls/controls.json */ "./src/style-controls/controls.json");
var _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./style-controls/controls.json */ "./src/style-controls/controls.json", 1);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__);









function Edit(props) {
  var clientId = props.clientId,
      closeChildToggles = props.closeChildToggles;
  var wrapperClass = 'ep__fb_wrapper_' + clientId;
  var _props$attributes = props.attributes,
      id = _props$attributes.id,
      openOneAtTime = _props$attributes.openOneAtTime;
  var _editorPlus$component = editorPlus.components,
      SwitchSidebar = _editorPlus$component.SwitchSidebar,
      RenderMultiStyles = _editorPlus$component.RenderMultiStyles,
      InspectorControls = _editorPlus$component.InspectorControls,
      RenderStyles = _editorPlus$component.RenderStyles;
  props.setAttributes({
    id: wrapperClass
  });
  var template = [['create-block/accordion-item', // block slug
  {}, // attributes
  [] // inner blocks
  ]];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: wrapperClass
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_accordion_wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"], {
    template: template,
    allowedBlocks: ['create-block/accordion-item']
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InspectorControls, {
    clientId: props.clientId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "General"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Open One Time"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["FormToggle"], {
    checked: openOneAtTime,
    onChange: function onChange() {
      // if ( !openOneAtTime ) {
      // 	closeChildToggles();
      // }
      props.setAttributes({
        openOneAtTime: !openOneAtTime
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Design"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SwitchSidebar, {
    label: "Title",
    id: "title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Typography",
    groups: [{
      name: 'titleTypography',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.titleTypography
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Background",
    groups: [{
      name: 'Background',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.titleBackground
    }, {
      name: 'Active Background',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.titleHoverBackground
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Spacing",
    groups: [{
      name: 'Padding',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.titlePadding
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SwitchSidebar, {
    label: "Content",
    id: "title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Background",
    groups: [{
      name: 'Content Background',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.contentBackground
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Padding",
    groups: [{
      name: 'Content Padding',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.contentPadding
    }]
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(SwitchSidebar, {
    label: "Block",
    id: "title"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Typography",
    groups: [{
      name: 'titleTypography',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.titleTypography
    }]
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderMultiStyles, {
    initialOpen: false,
    title: "Background",
    groups: [{
      name: 'titleTypography',
      options: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_4__.titleTypography
    }]
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderStyles, {
    wrapperClass: wrapperClass,
    clientId: props.clientId
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_7__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withSelect"])(function (select, _ref) {
  var clientId = _ref.clientId;

  var _select = select('core/block-editor'),
      getBlock = _select.getBlock;

  return {
    currentBlock: getBlock(clientId)
  };
}), Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__["withDispatch"])(function (dispatch, _ref2) {
  var clientId = _ref2.clientId,
      currentBlock = _ref2.currentBlock;

  var _dispatch = dispatch('core/block-editor'),
      updateBlockAttributes = _dispatch.updateBlockAttributes;

  return {
    /**
     * Will close all child toggles
     */
    closeChildToggles: function closeChildToggles() {
      if (typeof currentBlock.innerBlocks === 'undefined') return;
      currentBlock.innerBlocks.forEach(function (childBlock) {
        updateBlockAttributes(childBlock.clientId, {
          isOpen: false
        });
      });
    }
  };
})])(Edit));

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _child_edit_child__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./child/edit-child */ "./src/child/edit-child.js");
/* harmony import */ var _child_save_child__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./child/save-child */ "./src/child/save-child.js");
/* harmony import */ var _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style-controls/controls.json */ "./src/style-controls/controls.json");
var _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./style-controls/controls.json */ "./src/style-controls/controls.json", 1);








var STYLING_CONTROLS_SCHEMA = {
  type: "object",
  default: {}
}; // Parent Block

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/accordion-block', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Accordion Block', 'accordion-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Example block written with ESNext standard and JSX support – build step required.', 'accordion-block'),
  category: 'widgets',
  icon: 'smiley',
  supports: {
    // Removes support for an HTML mode.
    html: false
  },
  attributes: {
    epStylingOptions: {
      type: "object",
      default: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_7__
    },
    // wrapper class
    id: {
      type: "string",
      default: ""
    },
    openOneAtTime: {
      type: 'boolean',
      default: false
    },
    // custom attribute
    titleTypography: STYLING_CONTROLS_SCHEMA,
    titleBackground: STYLING_CONTROLS_SCHEMA,
    titleHoverBackground: STYLING_CONTROLS_SCHEMA,
    titlePadding: STYLING_CONTROLS_SCHEMA,
    contentBackground: STYLING_CONTROLS_SCHEMA,
    contentPadding: STYLING_CONTROLS_SCHEMA
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
}); // Child Block

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/accordion-item', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Item', 'accordion-block'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Example block written with ESNext standard and JSX support – build step required.', 'accordion-item'),
  category: 'widgets',
  icon: 'smiley',
  supports: {
    // Removes support for an HTML mode.
    html: false
  },
  attributes: {
    epStylingOptions: {
      type: "object",
      default: _style_controls_controls_json__WEBPACK_IMPORTED_MODULE_7__
    },
    // wrapper class
    id: {
      type: "string",
      default: ""
    },
    accordionTitle: {
      type: 'string',
      default: 'Accordion Title'
    },
    isOpen: {
      type: "boolean",
      default: false
    }
  },
  edit: _child_edit_child__WEBPACK_IMPORTED_MODULE_5__["default"],
  save: _child_save_child__WEBPACK_IMPORTED_MODULE_6__["default"],
  parents: ['create-block/accordion-block']
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



var RenderSavedStyles = editorPlus.components.RenderSavedStyles;

function save(props) {
  var _props$attributes = props.attributes,
      id = _props$attributes.id,
      openOneAtTime = _props$attributes.openOneAtTime;
  console.log('Open ', openOneAtTime);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "cwp_accordion_wrapper",
    "data-open": openOneAtTime
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(RenderSavedStyles, props)));
}

/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/style-controls/controls.json":
/*!******************************************!*\
  !*** ./src/style-controls/controls.json ***!
  \******************************************/
/*! exports provided: titleTypography, titleBackground, titleHoverBackground, titlePadding, contentBackground, contentPadding, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"titleTypography\":{\"target\":\"accordion_title\",\"responsive\":true,\"hover\":true,\"options\":[{\"label\":\"\",\"control\":\"Typography\",\"attribute\":\"titleTypography\",\"defaults\":{\"desktop\":{\"text-color\":\"#1e1e1e\",\"font-size\":\"17px\"}}}]},\"titleBackground\":{\"target\":\"cwp_title_wrapper\",\"responsive\":true,\"hover\":true,\"options\":[{\"label\":\"Background\",\"control\":\"Background\",\"attribute\":\"titleBackground\",\"defaults\":{\"desktop\":{\"solid\":\"#ff0000\"}}}]},\"titleHoverBackground\":{\"target\":\"cwp_title_wrapper:hover\",\"responsive\":true,\"hover\":true,\"options\":[{\"label\":\"Active Background\",\"control\":\"Background\",\"attribute\":\"titleHoverBackground\",\"defaults\":{\"desktop\":{\"solid\":\"#007cba\"}}}]},\"titlePadding\":{\"target\":\"cwp_title_wrapper\",\"responsive\":true,\"hover\":true,\"options\":[{\"label\":\"Padding\",\"control\":\"Dimensions\",\"attribute\":\"titlePadding\",\"css\":\"padding\",\"defaults\":{\"desktop\":\"10px\"}}]},\"contentBackground\":{\"target\":\"cwp_content_wrapper\",\"responsive\":true,\"hover\":true,\"options\":[{\"label\":\"Background\",\"control\":\"Background\",\"attribute\":\"contentBackground\",\"defaults\":{\"desktop\":{\"solid\":\"#f5f5f5\"}}}]},\"contentPadding\":{\"target\":\"cwp_content_wrapper\",\"responsive\":true,\"hover\":true,\"options\":[{\"label\":\"Padding\",\"control\":\"Dimensions\",\"attribute\":\"contentPadding\",\"css\":\"padding\",\"defaults\":{\"desktop\":\"10px\"}}]}}");

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map