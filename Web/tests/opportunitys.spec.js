

describe("Opportunity", function () {

    describe("opportunitys List", function () {

        beforeEach(function () {

            bard.inject(this, "$controller", "$q", "$rootScope", "opportunitysService");

            bard.mockService("opportunitysService", mockopportunitysService);

            //controller = $controller("opportunitys ");

        });

        it("should instantiate the controller properly", function () {
            expect(controller).not.toBeUndefined();
        });
    });


});



		
