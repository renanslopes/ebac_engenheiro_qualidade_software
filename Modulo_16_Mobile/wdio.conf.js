export const config = {
    user: 'oauth-renanlopes86-14a09',
    key: '5ba72adf-b6d6-4e84-80f2-7c8c4e96f132',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    capabilities: [
        {
            platformName: 'Android',
            'appium:app': 'storage:filename=ebacshop.aab',
            'appium:deviceName': 'Google Pixel 6 GoogleAPI Emulator',
            'appium:platformVersion': '15',
            'appium:automationName': 'UiAutomator2',
            'sauce:options': {
                appiumVersion: '2.11.0',
                build: 'appium-build-C2Q0J',
                name: 'Ebach Shop Test',
                deviceOrientation: 'PORTRAIT'
            },
            'appium:disableIdLocatorAutocompletion': true
        }
    ],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}

