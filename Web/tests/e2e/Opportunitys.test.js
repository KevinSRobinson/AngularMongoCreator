
require("protractor");
var ph = require("../protractorHelpers.js");


describe('Opportunitys', function () {

    var pageTitle = 'Opportunity Details';
    var opportunityRepeater = 'opportunity in vm.opportunitys';

    browser.get('http://localhost:3001/#/opportunitys');
        
    it('should load the opportunityss', function () {
        browser.get('http://localhost:3001/#/opportunityss').then(function () {
            ph.expectRepeaterToHaveValues(opportunitysRepeater);
        });
    });

    

    describe('Opportunity Details', function () {

        it('Should display the details page', function () {
            ph.clickOnFirstDetailsLink(opportunitysRepeater);
        });

        it('Should have a Page Title', function () {
            ph.expectPageTitle(pageTitle);
        });
    });

});
