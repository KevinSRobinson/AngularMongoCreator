

describe("Contact", function () {

    describe("contacts List", function () {

        beforeEach(function () {

            bard.inject(this, "$controller", "$q", "$rootScope", "contactsService");

            bard.mockService("contactsService", mockcontactsService);

            //controller = $controller("contacts ");

        });

        it("should instantiate the controller properly", function () {
            expect(controller).not.toBeUndefined();
        });
    });


});



		
