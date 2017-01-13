

describe("Awards", function () {

    describe("awardss List", function () {

        beforeEach(function () {

            bard.inject(this, "$controller", "$q", "$rootScope", "awardssService");

            bard.mockService("awardssService", mockawardssService);

            //controller = $controller("awardss ");

        });

        it("should instantiate the controller properly", function () {
            expect(controller).not.toBeUndefined();
        });
    });


});



		
