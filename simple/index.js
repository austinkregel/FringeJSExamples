
/**
 * Build the core of the app.
 */
require('fringejs')

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
 * Bind some kind of route
 */
router.get('/', () => 'Hello world, I am a route bound out of the container');

/**
 * Listen on a port
 */
router.listen(process.env.APP_PORT || PORT_NUMBER, () => (console.log('Started...')));
