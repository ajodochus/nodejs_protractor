var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    // The address of a running selenium server. 
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance. 
    capabilities: {
        'browserName': 'chrome'
       
    },

    // Spec patterns are relative to the current working directly when 
    // protractor is called. 
    specs: ['example_spec.js'],

    // Options to be passed to Jasmine-node. 
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    
    },


    onPrepare: function () {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: './test/reports',
                fileName: "test",
                fileNameDateSuffix: true,
                takeScreenshotsOnlyOnFailures: true,
                cleanDestination: false
                //git test
            })
        );
    }
};