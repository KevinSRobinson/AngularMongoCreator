
require("protractor");
var ph = require("../protractorHelpers.js");


describe('OrganisationAddresss', function () {

    var pageTitle = 'OrganisationAddress Details';
    var organisationAddressRepeater = 'organisationAddress in vm.organisationAddresss';

    browser.get('http://localhost:3001/#/organisationAddresss');
        
    it('should load the organisationAddressss', function () {
        browser.get('http://localhost:3001/#/organisationAddressss').then(function () {
            ph.expectRepeaterToHaveValues(organisationAddresssRepeater);
        });
    });

    

    describe('OrganisationAddress Details', function () {

        it('Should display the details page', function () {
            ph.clickOnFirstDetailsLink(organisationAddresssRepeater);
        });

        it('Should have a Page Title', function () {
            ph.expectPageTitle(pageTitle);
        });
    });

});
