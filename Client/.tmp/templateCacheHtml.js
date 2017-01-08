angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("app/Index.html","<!doctype html>\r\n<html lang=\"en\" ng-app=\"app\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\r\n    <title>Sample Contacts</title>\r\n\r\n\r\n    <!-- bower:css -->\r\n \r\n    <!-- endbower -->\r\n\r\n    <!-- inject:css -->\r\n\r\n    <!--endinject-->\r\n\r\n</head>\r\n\r\n<body>\r\n    <main-layout></main-layout>\r\n\r\n      <!--bower:js -->\r\n      <!--endbower-->\r\n\r\n \r\n        <!-- inject:js -->\r\n        <!--endinject-->\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n");
$templateCache.put("app/Login/loginTemplate.html","<button class=\"btn btn-primary\" ng-click=\"vm.authService.login()\">Log In Now</button>\r\n\r\n<div ng-if=\"vm.isAuthenticated\">\r\n  <p>Thank you for logging in!</p>\r\n  <button ng-click=\"vm.authService.logout()\">Log Out</button>\r\n</div>\r\n");
$templateCache.put("app/Features/Navigation/mainLayoutTemplate.html","		\r\n<admin-layout title=\"Admidn\" theme=\"success\" side-menu-items=\"vm.sideMenuItems\" user-menu-items=\"vm.userMenuItems\" alert-menu-items=\"vm.alertMenuItems\" , footer-links=\"vm.footerLinks\" user-name=\"{{vm.userName}}\">  \r\n</admin-layout>\r\n");
$templateCache.put("app/Features/Contacts/Components/contactsList.html","<my-panel title=\"Tags\" show-add-button=\"true\" add=\"vm.create()\" style=\"success\" icon=\"tags\" icon-size=\"2\">\r\n <my-filter-textbox ng-model=\"filter\"></my-filter-textbox>\r\n<table class=\"table table-striped\">\r\n   <thead>\r\n        <tr>\r\n             <td>Id</td>\r\n<td>FirstName</td>\r\n<td>LastName</td>\r\n        </tr>\r\n    </thead>\r\n    <tr ng-repeat=\"contact in vm.contacts | filter:filter \">\r\n        <td>{{ contact._id }}</td>\r\n<td>{{ contact.FirstName }}</td>\r\n<td>{{ contact.LastName }}</td>\r\n        <td><div class=\"btn btn-success\" ng-click=\"vm.edit(contact)\">Edit</div></td>\r\n    </tr>\r\n</table>\r\n</my-panel>");
$templateCache.put("app/Features/Contacts/Modals/modifyContactModalControllerTemplate.html","<my-modal-header title=\"Modify Contact\"></my-modal-header>\r\n<my-input-field field-label=\"FirstName\" ng-model=\"vm.contact.FirstName\"></my-input-field>\r\n<my-input-field field-label=\"LastName\" ng-model=\"vm.contact.LastName\"></my-input-field>\r\n<my-modal-buttons close=\"vm.close()\" save=\"vm.save()\"></my-modal-buttons>\r\n");
$templateCache.put("app/Features/Contacts/Views/Index.html","		\r\n\r\n\r\n<h1>Contacts</h1>\r\n\r\n<contacts-list></contacts-list>\r\n\r\n\r\n");
$templateCache.put("app/Features/Organisations/Components/organisationsList.html","<my-panel title=\"Tags\" show-add-button=\"true\" add=\"vm.create()\" style=\"success\" icon=\"tags\" icon-size=\"2\">\r\n <my-filter-textbox ng-model=\"filter\"></my-filter-textbox>\r\n<table class=\"table table-striped\">\r\n   <thead>\r\n        <tr>\r\n             <td>Id</td>\r\n<td>Name</td>\r\n        </tr>\r\n    </thead>\r\n    <tr ng-repeat=\"organisation in vm.organisations | filter:filter \">\r\n        <td>{{ organisation._id }}</td>\r\n<td>{{ organisation.Name }}</td>\r\n        <td><div class=\"btn btn-success\" ng-click=\"vm.edit(organisation)\">Edit</div></td>\r\n    </tr>\r\n</table>\r\n</my-panel>");
$templateCache.put("app/Features/Organisations/Modals/modifyOrganisationModalControllerTemplate.html","<my-modal-header title=\"Modify Organisation\"></my-modal-header>\r\n<my-input-field field-label=\"Name\" ng-model=\"vm.organisation.Name\"></my-input-field>\r\n<my-modal-buttons close=\"vm.close()\" save=\"vm.save()\"></my-modal-buttons>\r\n");
$templateCache.put("app/Features/Organisations/Views/Index.html","		\r\n\r\n\r\n<h1>Organisations</h1>\r\n\r\n<organisations-list></organisations-list>\r\n\r\n\r\n");}]);