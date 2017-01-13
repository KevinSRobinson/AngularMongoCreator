
require("protractor");
var ph = require("../protractorHelpers.js");


describe('Contacts', function () {

    var pageTitle = 'Contact Details';
    var contactRepeater = 'contact in vm.contacts';

    browser.get('http://localhost:3001/#/contacts');
        
    it('should load the contactss', function () {
        browser.get('http://localhost:3001/#/contactss').then(function () {
            ph.expectRepeaterToHaveValues(contactsRepeater);
        });
    });

    

    describe('Contact Details', function () {

        it('Should display the details page', function () {
            ph.clickOnFirstDetailsLink(contactsRepeater);
        });

        it('Should have a Page Title', function () {
            ph.expectPageTitle(pageTitle);
        });
    });

});
