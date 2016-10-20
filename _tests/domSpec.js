var addClass = require("../dom/add-class.js");
var removeClass = require("../dom/remove-class.js");

var expect = require('chai').expect; // expect style assertions

before(function() {
    this.jsdom = require('jsdom-global')();
});

after(function() {
    this.jsdom();
});

describe('Add Class', function() {
    var element;
    var classNameToAdd = 'myOwn';

    beforeEach(function() {
        element = document.createElement('div');
    });

    it('should exist', function() {
        expect(addClass).to.not.be.undefined;
    });

    it('adds a class to a single element, with no classes', function() {

        addClass(element, classNameToAdd);

        expect(element.classList.contains(classNameToAdd)).to.equal(true);
        expect(element.classList.contains('not-here')).not.to.equal(true);
    });

    it('adds a class to a single element, with more than one classes', function() {
        element.classList.add('do-not-care');
        element.classList.add('do-not-care-again');

        addClass(element, classNameToAdd);

        expect(element.classList.contains(classNameToAdd)).to.equal(true);
    });
})

describe('Remove Class', function() {
    var element;

    beforeEach(function() {
        element = document.createElement('div');
        element.classList.add('toBeRemoved');
    });

    it('should exist', function() {
        expect(removeClass).to.not.be.undefined;
    });

    it('removes a class from a single element', function() {
        var classNameToRemove = 'toBeRemoved';

        expect(element.classList.contains(classNameToRemove)).to.equal(true);

        removeClass(element, classNameToRemove);

        expect(element.classList.contains(classNameToRemove)).not.to.equal(true);
    });
})
