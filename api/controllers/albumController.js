const mongoose = require('mongoose');
const album = mongoose.model('album');


//The following methods are some methods that are exported.
// These methods will be used to interact with our mongoDB.

//List all albums returns all the albums in the DB
exports.list_all_albums = (req, res) => {
    album.find({}, (err, albums) => {
        if(err) res.send(err);
        res.json(albums);
    });
};

//Create a album creates a new document in our Albums database
exports.create_a_album = (req, res) => {
    const newAlbum = new album(req.body);
    newAlbum.save((err, album) => {
        if(err) { res.send(err); console.log(`Error creating album`);}
        res.json(album);
    });
};

//Read a album returns a specific album from our database based on the ID
exports.read_a_allbum = (req, res) => {
    album.findById(req.params.albumId, (err, album) => {
        if(err) res.send(err);
        res.json(album);
    });
};

//Update a album will receiveing information and update the corresponding document with new values
exports.update_a_album = (req, res) => {
    album.findOneAndUpdate(
        { _id: req.params.albumId },
        req.body,
        { new: true },
        (err, album)=> {
            if(err) res.send(err);
            res.json(album);
        }
    );
};

//Delete a album will delete an Album document from our database
exports.delete_a_album = (req, res) => {
    album.deleteOne({ _id: req.params.albumId }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Album was successfully deleted',
            _id: req.params.albumId
        });
    });
};