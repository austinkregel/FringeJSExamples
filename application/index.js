
/**
 * Build the core of the app.
 */
require('fringejs')

/**
 * Boot our app up and bind what we need to the container.
 */
require('./bootstrap/app');

/**
 * Port the app should be set up on
 * @type {number}
 */
const PORT_NUMBER = 3000;

/**
 * Get the router
 * @type {*}
 */
let router = app.make('Router');

/**
 * Listen on a port
 */
router.listen(process.env.APP_PORT || PORT_NUMBER, () => (console.log('Started...')));
