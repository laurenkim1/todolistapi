// server.js
var app = require('./app');

var port = process.env.PORT || 3000;

Task = require('./api/models/todoListModel');
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes');
routes(app);


var server = app.listen(port, function() {
  console.log('todo list RESTful API server started on: ' + port);
});
