const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.album = require('./api/models/albumModel');
const routes = require('./api/routes/albumRoutes');

//Open  a connection to our MongoDB
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/CoetAlbums', {useNewUrlParser: true});

//Define our port
const port = process.env.PORT || 3000;
const app = express();

//Enable CORS, json, URL encoding in our application
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Define our routes
routes(app);
app.listen(port);

//Custom 404 error
app.use((req, res) => {
    res.status(404).send({url: `${req.originalUrl} not found`});
});

console.log(`Server started on port ${port}`);