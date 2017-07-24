/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/node/node.d.ts"/>
var assert = require('chai').assert;
var configuration = require('../../lib/configuration');

module.exports =  function () {
	it('Should set default text', function () {
		var result = configuration({});
		assert.isDefined(result.text);
	});
	
	it('Should set default color', function () {
		var result = configuration({});
		assert.isDefined(result.color);
	});
	
	it('Should set default font', function () {
		var result = configuration({});
		assert.isDefined(result.font);
	});
	
	it('Should set default width', function () {
		var result = configuration({});
		assert.isDefined(result.width);
	});
	
	it('Should not override user configuration', function () {
		var result = configuration({ width: 150, font: 'HHH', color: "#FFF"});
		assert.equal(result.width, 150);
		assert.equal(result.font, 'HHH');
		assert.equal(result.color, '#FFF');
	});
};