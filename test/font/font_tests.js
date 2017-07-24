/// <reference path="../../typings/mocha/mocha.d.ts"/>
/// <reference path="../../typings/node/node.d.ts"/>
var assert = require('assert');
var font = require('../../lib/font');
var path = require('path');


module.exports = function () {
	var base = path.normalize(process.cwd() + path.sep + "fonts" + path.sep);

	it('Should return correct font for given name - Bariol', function () {
		assert.equal(font.get("bariol", 100).file, base + "Bariol.otf");
	});
	it('Should return correct font for given name - DIN', function () {
		assert.equal(font.get("din", 100).file, base + "DIN.otf");
	});
	it('Should return correct font for given name - detault', function () {
		assert.equal(font.get("asdasd", 100).file, base + "DIN.otf");
	});
	it('Should return null if null passed', function () {
		assert.equal(font.get(null, 100), null);
	});

};