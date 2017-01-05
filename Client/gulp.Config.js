module.exports = function () {

    //temp location for compiled css
    var temp = './.tmp/';
    var srcRoot = './src/';
    var clientFolder = srcRoot + '/client/';
    var serverFolder = srcRoot + '/server/';

    var clientAppFolder = clientFolder + '/';


    //bowerfiles
    var bowerFilesPath = './bower_components/';
    var bowerJsonFile = './bower.json';


    var config = {


        /**********************************/
        /**  Files Paths */
        temp: temp,
        clientFolder: clientFolder,

        // source file paths
        alljs: ['./src/**/*.js',
            './*.*.js'
        ],

        //path to the main client index.html file
        clientIndexFile: clientFolder + 'index.html',

        ///////////////////////////////////////
        ///  STYLES
        //less config
        less: clientFolder + 'styles/styles.less',
        compiledLess: temp + '*.css',

         fonts: './bower_components/font-awesome/fonts/**/*.*',


        //client application files
        //gulp-inject uses these to inject
        //file references into the index.html page
        //  <!-- inject:js -->
        //      ** files will be added here **
        //  <!--endinject--> 
        appJsFiles: [
            clientAppFolder + '*.js',
            //all angular modules
            clientAppFolder + 'Features/**/*.js',
            //all other js files
            clientAppFolder + 'DataServices/**/*.js',
            //ignore tests
            '!' + clientAppFolder + '**/*.spec.js'
        ],


        // bower configuration options.  used by wiredep
        bower: {
            json: require(bowerJsonFile),
            directory: bowerFilesPath,
            ignorePath: '../..'
        },

        ///////////////////////////////////////
        ///  Browser Sync
        browserReloadDelay: 1000,


        ///////////////////////////////////////
        ///  Node Server
        nodeServerOptions: function (isDev) {
            return {
                script: serverFolder + 'app.js',
                delayTime: 1,
                port: 7203,
                env: {
                    'PORT': 7203,
                    'NOE_ENV': isDev ? 'dev' : 'build'
                },
                watch: [serverFolder]
            };
        }

    };



    // wiredef config settings
    config.getWiredepDefaultOptions = function () {
        return {
            //location of the bower.json file
            bowerJson: config.bower.json,
            //location of bowercomponents
            directory: bowerFilesPath,

            ignorePath: config.bower.ignorePath
        };
    };

    return config;
};


		
			

		
		
			