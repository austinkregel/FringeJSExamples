/**
 * Bind our classes through the container 
 */
app.aliases({
    // If you want to 
    'Model/User': require('../Models/User'),
    'Controllers/Thing': require('../Controllers/Thing')
});

/**
 * In truth you shouldn't try accessing "private properties" but I wanna do some 
 * loading magic for these controllers just so the routes will be bound.
 */
for (let alias in app._aliases) {
    if (alias.toLowerCase().indexOf('container') !== 0) {
        console.log(alias)
        app.make(alias)
;    }
}