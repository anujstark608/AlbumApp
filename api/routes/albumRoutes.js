const albumBuilder = require('../controllers/albumController');

module.exports = app => {
    app
        .route('/albums')
        .get(albumBuilder.list_all_albums)
        .post(albumBuilder.create_a_album);

    app
        .route('/albums/:albumId')
        .get(albumBuilder.read_a_allbum)
        .put(albumBuilder.update_a_album)
        .delete(albumBuilder.delete_a_album);
};