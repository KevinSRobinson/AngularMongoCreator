	
module.exports = function (config) {



    var options = {
        files: [].concat(
            // bower:js
            "bower_components/jquery/dist/jquery.js",
            "bower_components/angular/angular.js",
            "bower_components/angular-sanitize/angular-sanitize.js",
            "bower_components/bootstrap/dist/js/bootstrap.js",
            "bower_components/extras.angular.plus/ngplus-overlay.js",
            "bower_components/moment/moment.js",
            "bower_components/toastr/toastr.js",
            "bower_components/angular-ui-router/release/angular-ui-router.js",
            "bower_components/angular-animate/angular-animate.js",
            "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "bower_components/angular-ui-select/dist/select.js",
            "bower_components/angular-messages/angular-messages.js",
            "bower_components/ng-fab-form/dist/ng-fab-form.js",
            "bower_components/auth0-lock/build/lock.js",
            "bower_components/angular-lock/angular-lock.js",
            "bower_components/angular-jwt/dist/angular-jwt.js",
            "bower_components/angular-ui-ace/ui-ace.js",
            "bower_components/angular-showdown/showdown.js",
            "bower_components/angular-ui-grid/ui-grid.js",
            "bower_components/firebase/firebase.js",
            "bower_components/angularfire/dist/angularfire.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "bower_components/sinon/index.js",
            "bower_components/bardjs/dist/bard.js",
            "bower_components/bardjs/dist/bard-ngRouteTester.js",
            "bower_components/my-angular-components/build/js/app.js",
            "bower_components/angular-resource/angular-resource.js",
            // endbower

            // inject:js
            "src/client/app.js",
            "src/client/app.run.js",
            "src/client/authService.js",
            "src/client/routes.js",
            "src/client/DataServices/awardsDataService.js",
            "src/client/DataServices/contactDataService.js",
            "src/client/DataServices/hourRecordDataService.js",
            "src/client/DataServices/opportunityDataService.js",
            "src/client/DataServices/organisationAddressDataService.js",
            "src/client/DataServices/organisationDataService.js",
            "src/client/DataServices/planOfActionDataService.js",
            "src/client/DataServices/reviewDataService.js",
            "src/client/DataServices/selfAssessmentDataService.js",
            "src/client/DataServices/trainingSkillDataService.js",
            "src/client/DataServices/whereIVolunteerDataService.js",
            "src/client/Navigation/mainLayout.js",
            "src/client/Features/Awards/routes.js",
            "src/client/Features/Contacts/routes.js",
            "src/client/Features/HourRecords/routes.js",
            "src/client/Features/Opportunitys/routes.js",
            "src/client/Features/OrganisationAddress/routes.js",
            "src/client/Features/Organisations/routes.js",
            "src/client/Features/PlanOfActions/routes.js",
            "src/client/Features/Reviews/routes.js",
            "src/client/Features/SelfAssessments/routes.js",
            "src/client/Features/TrainingSkills/routes.js",
            "src/client/Features/WhereIVolunteers/routes.js",
            "src/client/Features/Awards/Modals/awardsModalService.js",
            "src/client/Features/Awards/Modals/modifyAwardsModalController.js",
            "src/client/Features/Contacts/Modals/contactModalService.js",
            "src/client/Features/Contacts/Modals/modifyContactModalController.js",
            "src/client/Features/HourRecords/Modals/hourRecordModalService.js",
            "src/client/Features/HourRecords/Modals/modifyHourRecordModalController.js",
            "src/client/Features/Opportunitys/Modals/modifyOpportunityModalController.js",
            "src/client/Features/Opportunitys/Modals/opportunityModalService.js",
            "src/client/Features/OrganisationAddress/Modals/modifyOrganisationAddressModalController.js",
            "src/client/Features/OrganisationAddress/Modals/organisationAddressModalService.js",
            "src/client/Features/Organisations/Modals/modifyOrganisationModalController.js",
            "src/client/Features/Organisations/Modals/organisationModalService.js",
            "src/client/Features/PlanOfActions/Modals/modifyPlanOfActionModalController.js",
            "src/client/Features/PlanOfActions/Modals/planOfActionModalService.js",
            "src/client/Features/Reviews/Modals/modifyReviewModalController.js",
            "src/client/Features/Reviews/Modals/reviewModalService.js",
            "src/client/Features/SelfAssessments/Modals/modifySelfAssessmentModalController.js",
            "src/client/Features/SelfAssessments/Modals/selfAssessmentModalService.js",
            "src/client/Features/TrainingSkills/Modals/modifyTrainingSkillModalController.js",
            "src/client/Features/TrainingSkills/Modals/trainingSkillModalService.js",
            "src/client/Features/WhereIVolunteers/Modals/modifyWhereIVolunteerModalController.js",
            "src/client/Features/WhereIVolunteers/Modals/whereIVolunteerModalService.js",
            "src/client/Features/Awards/Components/awardsList/awardsList.js",
            "src/client/Features/Contacts/Components/contactList/contactList.js",
            "src/client/Features/HourRecords/Components/hourRecordList/hourRecordList.js",
            "src/client/Features/Opportunitys/Components/opportunityList/opportunityList.js",
            "src/client/Features/OrganisationAddress/Components/organisationAddressList/organisationAddressList.js",
            "src/client/Features/Organisations/Components/organisationList/organisationList.js",
            "src/client/Features/PlanOfActions/Components/planOfActionList/planOfActionList.js",
            "src/client/Features/Reviews/Components/reviewList/reviewList.js",
            "src/client/Features/SelfAssessments/Components/selfAssessmentList/selfAssessmentList.js",
            "src/client/Features/TrainingSkills/Components/trainingSkillList/trainingSkillList.js",
            "src/client/Features/WhereIVolunteers/Components/whereIVolunteerList/whereIVolunteerList.js",
            // endinject

            // spec:js           
            "src/Client/Features/Awards/Tests/awards.spec.js",           
            "src/Client/Features/Contacts/Tests/contact.spec.js",           
            "src/Client/Features/HourRecords/Tests/hourRecord.spec.js",           
            "src/Client/Features/Opportunitys/Tests/opportunity.spec.js",           
            "src/Client/Features/OrganisationAddress/Tests/organisationAddress.spec.js",           
            "src/Client/Features/Organisations/Tests/organisation.spec.js",           
            "src/Client/Features/PlanOfActions/Tests/planOfAction.spec.js",           
            "src/Client/Features/Reviews/Tests/review.spec.js",           
            "src/Client/Features/SelfAssessments/Tests/selfAssessment.spec.js",           
            "src/Client/Features/TrainingSkills/Tests/trainingSkill.spec.js",           
            "src/Client/Features/WhereIVolunteers/Tests/whereIVolunteer.spec.js"           
            // endinject


        ),
        exclude: [],
        // coverage: {

        //     //dir: report + 'coverage',
        //     reporters: [{
        //         type: 'html',
        //         subdir: 'report-html'
        //     }, {
        //         type: 'lcov',
        //         subdir: 'report-lcov'
        //     }, {
        //         type: 'text-summary'
        //     }]
        // },
        preprocessors: {
            ngHtml2JsPreprocessor: {
                cacheIdFromPath: function (filepath) {
                    //The suggested filepath.strip would through an error
                    console.llog(filepath);
                    var cacheId = filepath.replace('main/resources/static/', '');
                    return cacheId;
                }
            }
        }
    };



    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // some available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['wiredep', 'jasmine', 'chai'],

        // list of files / patterns to load in the browser
        files: options.files,

        // list of files to exclude
        exclude: options.exclude,

        // proxies: {
        //     '/': 'http://localhost:8888/'
        // },

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: options.preprocessors,

        // test results reporter to use
        // possible values: 'dots', 'progress', 'coverage'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // coverageReporter: {
        //     dir: options.coverage.dir,
        //     reporters: options.coverage.reporters
        // },

        // web server port
        port: 9876,

        plugins: [
            'karma-wiredep',
            'karma-jasmine',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        wiredep: {
            dependencies: true, // default: true  
            devDependencies: true, // default: false  
        },
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        //        browsers: ['Chrome', 'ChromeCanary', 'FirefoxAurora', 'Safari', 'PhantomJS'],
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
