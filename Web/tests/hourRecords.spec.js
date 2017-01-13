

describe("HourRecord", function () {

    describe("hourRecords List", function () {

        beforeEach(function () {

            bard.inject(this, "$controller", "$q", "$rootScope", "hourRecordsService");

            bard.mockService("hourRecordsService", mockhourRecordsService);

            //controller = $controller("hourRecords ");

        });

        it("should instantiate the controller properly", function () {
            expect(controller).not.toBeUndefined();
        });
    });


});



		
