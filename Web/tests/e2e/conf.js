
var Jasmine2HtmlReporter = require('../node_modules/protractor-jasmine2-html-reporter');

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*.js'
    ],
    stackTrace: false,
    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './target/'
            })
        );
    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: false,

    },
    baseUrl: 'http://localhost:3001/#/'
};

