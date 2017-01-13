
require("protractor");
var ph = require("../protractorHelpers.js");


describe('Organisations', function () {

    var pageTitle = 'Organisation Details';
    var organisationRepeater = 'organisation in vm.organisations';

    browser.get('http://localhost:3001/#/organisations');
        
    it('should load the organisationss', function () {
        browser.get('http://localhost:3001/#/organisationss').then(function () {
            ph.expectRepeaterToHaveValues(organisationsRepeater);
        });
    });

    

    describe('Organisation Details', function () {

        it('Should display the details page', function () {
            ph.clickOnFirstDetailsLink(organisationsRepeater);
        });

        it('Should have a Page Title', function () {
            ph.expectPageTitle(pageTitle);
        });
    });

});
