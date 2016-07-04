/*
---
description: NodeGraph class.

license: MIT-style

authors:
- Brett Dixon

requires:
- core/1.3.1: *
- more/1.3.2: Color
- easel.js

provides: [NodeGraph]

...
*/

NodeGraph.Types = {
	'String': {
		'icon': 'imgs/String.png'
	},
	'Number': {
		'icon': 'imgs/Number.png'
	},
	'Boolean': {
		'icon': 'imgs/Bool.png'
	},
	'Array': {
		'icon': 'imgs/Array.png'
	},
	'Null': {
		'icon': 'imgs/Null.png'
	},
	'Object': {
		'icon': 'imgs/Object.png'
	},
	'Date': {
		'icon': 'imgs/Date.png',
		serialize: function(val) {
			return val.toISOString();
		}
	}
}