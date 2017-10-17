function initialize(app){

    //These are the API end points that you can write.

    //Setting up an event listener for GET request to '/' 
    app.get('/', function(req, res){ 
        console.log('request to / received');
        res.render('dashboard.html');       
    });

    //Routes for rendering original adminlte pages

    app.get('/adminlte/index.html', function(req, res){
        res.render('adminlte-pages/index.html');
    });


    /*Routes for rendering pages in reactjs.
    After creating a page in react, define a route for it here 
    */

    app.get('/earnings.html', function(req, res){
        res.render('earnings.html');
    });

    app.get('/profile.html', function(req, res){
        res.render('profile.html');
    });

    app.get('/inbox.html', function(req, res){
        res.render('inbox.html');
    });

    app.get('/sent.html', function(req, res){
        res.render('sent.html');
    });

    app.get('/compose.html', function(req, res){
        res.render('compose.html');
    });

    app.get('/findwork.html', function(req, res){
        res.render('findwork.html');
    });

    app.get('/allorders.html', function(req, res){
        res.render('allorders.html');
    });

    app.get('/bids.html', function(req, res){
        res.render('bids.html');
    });

}

exports.initialize = initialize;