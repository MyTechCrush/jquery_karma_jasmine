describe('simplest jQuery plugin test', function() {
    it('should use inline fixture', function() {

        //Setting fixture using " $ " " won't work
        //var fixture = $('<div class="post"><p>Hello World</p></div>');

        var fixture = setFixtures('<div class="post"><p>Hello World</p></div>');
        //console.log(fixture);
        expect($('p').length).toEqual(1);
        expect(fixture.find('p').length).toEqual(1);
        expect(fixture).toContainElement('p');
        expect(fixture).toContainElement('div.post');
        expect($("div")).toHaveClass('post');
        expect($("p")).toHaveText(/Hello World/);

        //Go through following link to understand the scenarios on writing fixtures...
        //https://github.com/devmen/jasmine-example/blob/master/spec/javascripts/validator_spec.js

        //toContain won't work
        //expect(fixture).toContain('post');

    });
});

describe('more realistic jQuery plugin test', function() {
    var fixture;

    beforeEach(function() {
        //console.log("in before each...");
        fixture = setFixtures('<div>some HTML code here</div>');
    });

    it('should use inline fixture', function() {
        expect(fixture).not.toContainElement('p');
    });
});

describe('Experimentation', function() {

    var elem;

    beforeEach(function() {
        elem = setFixtures('<div id="container"><p>Hello World</p></div>');
        //console.log(elem);
    });

    it('allows us to search with CSS selectors', function() {
        // As extra div ( <div id="jasmine-fixtures"> ) is being added to our fixture, we had to use "nth-child" to find the div with id "container"
        // actual fixture being created :: m{0: <div id="jasmine-fixtures"><div id="container"><p>Hello World</p></div></div>, length: 1}
        expect($("div:nth-child(1)")).toHaveId('container');
        expect($("div[id='container']")).toHaveId('container');
        //expect($("div")).toHaveClass('post');
        expect(elem).toContainElement('p');
    });

    it('detects whether an element has a class', function() {
        expect(elem).not.toHaveClass('container');
    });

    it('detects whether an element has text', function() {
        expect($('p')).toHaveText(/world/i);
    });

    it('should detect if an input has a value', function() {
        var input = $('<input value=myValue />');
        expect(input).toHaveValue('myValue');
    });

    it('Adding two numbers', function() {
        expect(1 + 2).toEqual(3);
    });

});