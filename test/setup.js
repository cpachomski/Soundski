import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';

/*
	Create testing DOM and apply all the window attributes to the global namespace
	Put react and expect in global Namespace as well
 */


const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
	if (!(key in global)) {
		global[key] = window[key];
	}
});

global.React = React;
global.expect = expect;