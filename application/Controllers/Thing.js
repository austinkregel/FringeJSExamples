module.exports = class Thing{
    constructor() {
        this.router = app.make('Router');
    
        this.bindRoutes()
    }

    bindRoutes() {
        this.router.get('/route', (req, res) => {
            res.send("yea this is route")
        })
    }
}