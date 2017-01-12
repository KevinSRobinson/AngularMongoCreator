		
var mainLayout = {
bindings: {
	allowChanges: '@'
},
controllerAs: 'vm',
templateUrl: 'Features/Navigation/mainLayoutTemplate.html',
controller: function () {
	var vm = this;

	vm.userName = 'Test Username';

	vm.sideMenuItems = [                
        { state: 'contacts', linkText:'Contacts', icon: 'cogs'},
{ state: 'awardss', linkText:'Awardss', icon: 'cogs'},
{ state: 'hourRecords', linkText:'HourRecords', icon: 'cogs'},
{ state: 'opportunitys', linkText:'Opportunitys', icon: 'cogs'},
{ state: 'organisations', linkText:'Organisations', icon: 'cogs'},
{ state: 'organisationAddresss', linkText:'OrganisationAddresss', icon: 'cogs'},
    ];


	vm.userMenuItems = [{
		state: 'userprofile',
		linkText: 'User Profile',
		icon: 'user'
	}, {
		state: 'useroptions',
		linkText: 'User Options',
		icon: 'cogs'
	}, {
		state: 'logout',
		linkText: 'Logout',
		icon: 'cogs'
	}, {
		state: 'login',
		linkText: 'Login',
		icon: 'check'
	}];

	vm.alertMenuItems = [{
		state: 'alert1',
		linkText: 'Alert 1',
		icon: 'bell'
	}, {
		state: 'alert2',
		linkText: 'Alert 3',
		icon: 'bell'
	}];

	vm.footerLinks = [{
			state: 'link1',
			linkText: 'Link 1'
		}, {
			state: 'link2',
			linkText: 'Link 2'
		}, {
			state: 'link3',
			linkText: 'Link 3'
		},

	]
},
}
angular.module('app').component('mainLayout', mainLayout);	
