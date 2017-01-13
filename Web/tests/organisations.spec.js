

describe("Organisation", function () {

    describe("organisations List", function () {

        beforeEach(function () {

            bard.inject(this, "$controller", "$q", "$rootScope", "organisationsService");

            bard.mockService("organisationsService", mockorganisationsService);

            //controller = $controller("organisations ");

        });

        it("should instantiate the controller properly", function () {
            expect(controller).not.toBeUndefined();
        });
    });


});



		
