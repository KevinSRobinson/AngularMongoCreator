
require("protractor");
var ph = require("../protractorHelpers.js");


describe('HourRecords', function () {

    var pageTitle = 'HourRecord Details';
    var hourRecordRepeater = 'hourRecord in vm.hourRecords';

    browser.get('http://localhost:3001/#/hourRecords');
        
    it('should load the hourRecordss', function () {
        browser.get('http://localhost:3001/#/hourRecordss').then(function () {
            ph.expectRepeaterToHaveValues(hourRecordsRepeater);
        });
    });

    

    describe('HourRecord Details', function () {

        it('Should display the details page', function () {
            ph.clickOnFirstDetailsLink(hourRecordsRepeater);
        });

        it('Should have a Page Title', function () {
            ph.expectPageTitle(pageTitle);
        });
    });

});
