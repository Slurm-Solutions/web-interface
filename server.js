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
                return '/establishment/' + key;
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
            "card_at_door": "card_at_door",
            "menu": [],
            "banlist": [],
            "tables": [],
        }

        save_db();

		res.json({
			message: 'This adds a new establishment',
			establishment: '/establisment/' + id
			});
	});

router.route('/establishment/:establishmentID')

	.get (function(req, res){
        res.json(db.establishments[req.params.establishmentID]);
	})

	.put (function(req, res){
        var obj = Object.assign(db.establishments[req.params.establishmentID],
                                req.body)
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
			banned: ['List of banned clients']
			});
	})

	.post (function(req, res){
		res.json({
			message: 'New client added to list',
			banned: ':clientID'
		});
	});

router.route('/establishment/:establishmentID/banList/:eventID')

	.get (function(req, res){
		res.json({
			message: 'Details about a client ban',
			client: 'clientID',
			start: 'ISO 8601 timestamp',
			end: 'ISO 8601 timestamp',
			reason: 'Too drunk and obnoxious'
			});
	})

	.put (function(req, res){
		res.json({
			message: 'Ban event updated',
			eventID: ':eventID'
		});
	})

	.delete (function(req, res){
		res.json({
			message: 'This ban has been removed.'
			});
	});

router.route('/establishment/:establishmentID/menu')

	.get (function(req, res){
		res.json({
			message: 'This is a list of all menu entries for this establishment',
			menu: ['List of menu items']
			});
	})

	.post (function(req, res){
		res.json({
			message: 'New menu item has been added',
			enty: ':entry'
		});
	});

router.route('/establishment/:establishmentID/menu/:entry')

	.get (function(req, res){
		res.json({
			message: 'This is a drink',
			drink: 'drink_name',
			price: 99.99,
			description: 'Is a good drink.',
			age_restricted: true
			});
	})

	.put (function(req, res){
		res.json({
			message: 'This drink has been updated.'
		});
	})

	.delete (function(req, res){
		res.json({
			message: 'This entry has been removed.'
			});
	});

router.route('/client')

	.get (function(req, res){
		res.json({ message: 'This is a list of all clients'})
	})

	.post (function(req, res){
		res.json({
			message: 'New client added.',
			client: ':clientID'
			});
	});

router.route('/client/:clientID')

	.get (function(req, res){
		res.json({
			message: 'This is a specific client',
			name: 'dudicus1'
			})
	});

router.route('/client/:clientID/orders')

	.get (function(req, res){
		res.json({
			message: 'This is a list of orders by a client.',
			orders: ['List of orders']
			});
	});

router.route('/client/:clientID/orders/:orderID')

	.get (function(req, res){
		res.json({
			message: 'This is an order by a client.',
			order: ['List of menu entries ordered']
			});
	})

	.put (function(req, res){
		res.json({
			message: 'This order has been updated.'
			});
	});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
