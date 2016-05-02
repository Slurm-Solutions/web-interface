var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

var port = 8080;        // set our port

var db;

require('fs').readFile('./database.json', 'utf8', function (err, data) {
    if (err) throw err; // we'll not consider error handling for now
    db = JSON.parse(data);
});

function save_db() {
    require('fs').writeFile('./database.json', JSON.stringify(db))
}

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();          // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

router.route('/establishment')

	.get (function(req, res){
		res.json({
			message: 'This should be a list of all registered establishments',
			establishments: Object.keys(db.establishments).map(function(key) {
                return '/api/establishment/' + key;
            })
		});
	})

	.post (function(req, res){
        var name = req.body.name;
        var email = req.body.email;
        var password = req.body.password;
        var card_at_door = req.body.card_at_door;
        var id = db.establishment_inc++
        db.establishments[id] = {
            "name": name,
            "email": email,
            "password": password,
            "card_at_door": card_at_door,
            "menu": {},
            "banlist": {},
            "tables": {},
            "orders": {},
        }

        save_db();

		res.json({
			message: 'This adds a new establishment',
			establishment: '/api/establishment/' + id
			});
	});

router.route('/establishment/:establishmentID')

	.get (function(req, res){
        res.json(db.establishments[req.params.establishmentID]);
	})

	.put (function(req, res){
        var obj = Object.assign(db.establishments[req.params.establishmentID], req.body);
        
        save_db();

		res.json(obj);
	})

	.delete (function(req, res){
        delete db.establishments[req.params.establishmentID];
		res.json({
			message: 'This establishment has been removed.'
			});
	});

router.route('/establishment/:establishmentID/tables')
    .get(function(req, res) {
        res.json({tables: db.establishments[req.params.establishmentID].tables})
    })
    .put(function(req, res) {
        var tables = db.establishments[req.params.establishmentID].tables;
        var add = req.body.add || [];
        var rem = req.body.remove || [];

        tables.push.apply(tables, add);
        for (var i=0; i<rem.length; i++) {
            r = rem[i];
            var ind = tables.indexOf(r);
            if(ind != -1) {
            	tables.splice(ind, 1);
            }
        }
        save_db();
        res.json({tables: db.establishments[req.params.establishmentID].tables})

    })

router.route('/establishment/:establishmentID/banList')

	.get (function(req, res){
		res.json({
			message: 'This is a list of all banned clients for this establishment',
			banned: Object.keys(db.establishments[req.params.establishmentID].banlist).map(function(key) {
                return '/api/establishment/' + req.params.establishmentID + '/banList/' + key;
            })
			});
	})

	.post (function(req, res){
		var clientID = req.body.client;
		var start = req.body.start;
		var duration = req.body.duration;
		var reason = req.body.reason;
		db.establishments[req.params.establishmentID].banlist[clientID] = {
				"start": start,
				"duration": duration,
				"reason": reason
		}
		
		save_db();
		
		res.json({
			message: 'New client added to list',
			banned: '/api/establishment/' + req.params.establishmentID + '/banList/' + clientID
		});
	});

router.route('/establishment/:establishmentID/banList/:eventID')

	.get (function(req, res){
		res.json(db.establishments[req.params.establishmentID].banlist[req.params.eventID]);
	})

	.put (function(req, res){
		var obj = Object.assign(db.establishments[req.params.establishmentID].banlist[req.params.eventID], req.body);
                
		save_db();
		
		res.json(obj);
	})

	.delete (function(req, res){
		delete db.establishments[req.params.establishmentID].banlist[req.params.eventID];
		res.json({
			message: 'This ban has been removed.'
			});
	});

router.route('/establishment/:establishmentID/menu')

	.get (function(req, res){
		var estabID = req.params.establishmentID;
		res.json({
			message: 'This should be a list of all registered menu items',
			menu: Object.keys(db.establishments[estabID].menu).map(function(key) {
                return '/api/establishment/' + estabID + '/menu/' + key;
            })
		});
	})

	.post (function(req, res){
		var estabID = req.params.establishmentID;
		var name = req.body.name;
        var price = req.body.price;
        var description = req.body.description;
        var image = req.body.image;
        var age_restricted = req.body.age_restricted;
        db.establishments[estabID].menu[name] = {
            "price": price,
            "description": description,
            "image": image,
            "age_rescrited": age_restricted
        }

        save_db();

		res.json({
			message: 'This adds a new menu item',
			establishment: '/api/establishment/' + estabID + '/menu/' + name
		});
	});

router.route('/establishment/:establishmentID/menu/:entry')

	.get (function(req, res){
		res.json(db.establishments[req.params.establishmentID].menu[req.params.entry])
	})

	.put (function(req, res){
		var obj = Object.assign(db.establishments[req.params.establishmentID].menu[req.params.entry], req.body);
                
		save_db();
		
		res.json(obj);
	})

	.delete (function(req, res){
		delete db.establishments[req.params.establishmentID].menu[req.params.entry];
		res.json({
			message: 'This entry has been removed.'
			});
	});

router.route('/establishment/:establishmentID/orders')
	
	.get (function(req, res){
		var clientID = req.params.clientID;
		res.json({
			message: 'This should be a list of all registered menu items',
			menu: Object.keys(db.establishments[clientID].orders).map(function(key) {
	            return '/api/client/' + clientID + '/orders/' + key;
	        })
		});
	})
	
	.post (function(req, res){
		var estabID = req.params.establishmentID;
		var name = req.body.name;
	    var price = req.body.price;
	    var description = req.body.description;
	    var image = req.body.image;
	    var age_restricted = req.body.age_restricted;
	    db.establishments[estabID].menu[name] = {
	        "price": price,
	        "description": description,
	        "image": image,
	        "age_rescrited": age_restricted
	    }
	
	    save_db();
	
		res.json({
			message: 'This adds a new menu item',
			establishment: '/api/establishment/' + estabID + '/menu/' + name
		});
	});
	
router.route('/establishment/:establishmentID/orders/:orderID')
	
	.get (function(req, res){
		res.json({
			message: 'This is an order by a client at an establishment.',
			order: ['List of menu entries ordered']
			});
	})
	
	.put (function(req, res){
		res.json({
			message: 'This order has been updated.'
			});
	});

router.route('/client')

	.get (function(req, res){
		res.json({
			message: 'This should be a list of all registered clients',
			menu: Object.keys(db.clients {
                return '/api/client/' + key;
            })
		});
	})

	.post (function(req, res){
		var username = req.body.username;
        var email = req.body.email;
        var password = req.body.password;
        var id = db.client_inc++
        db.clients[id] = {
            "name": name,
            "email": email,
            "password": password,
            "orders": {},
        }

        save_db();

		res.json({
			message: 'This adds a new client',
			establishment: '/api/client/' + id
			});
	});

router.route('/client/:clientID')

	.get (function(req, res){
        res.json(db.establishments[req.params.clientID]);
	})

	.put (function(req, res){
        var obj = Object.assign(db.clients[req.params.clientID], req.body);
        
        save_db();

		res.json(obj);
	})

	.delete (function(req, res){
        delete db.clients[req.params.clientID];
		res.json({
			message: 'This client has been removed.'
			});
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
