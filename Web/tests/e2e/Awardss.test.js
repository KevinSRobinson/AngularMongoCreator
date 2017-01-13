
require("protractor");
var ph = require("../protractorHelpers.js");


describe('Awardss', function () {

    var pageTitle = 'Awards Details';
    var awardsRepeater = 'awards in vm.awardss';

    browser.get('http://localhost:3001/#/awardss');
        
    it('should load the awardsss', function () {
        browser.get('http://localhost:3001/#/awardsss').then(function () {
            ph.expectRepeaterToHaveValues(awardssRepeater);
        });
    });

    

    describe('Awards Details', function () {

        it('Should display the details page', function () {
            ph.clickOnFirstDetailsLink(awardssRepeater);
        });

        it('Should have a Page Title', function () {
            ph.expectPageTitle(pageTitle);
        });
    });

});
