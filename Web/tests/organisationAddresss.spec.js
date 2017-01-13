

describe("OrganisationAddress", function () {

    describe("organisationAddresss List", function () {

        beforeEach(function () {

            bard.inject(this, "$controller", "$q", "$rootScope", "organisationAddresssService");

            bard.mockService("organisationAddresssService", mockorganisationAddresssService);

            //controller = $controller("organisationAddresss ");

        });

        it("should instantiate the controller properly", function () {
            expect(controller).not.toBeUndefined();
        });
    });


});



		
