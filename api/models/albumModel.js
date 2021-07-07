const mongoose = require('mongoose');

const { Schema } = mongoose;

const albumSchema = new Schema (
    {
        album: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: false
        },
        year: {
            type: Number,
            required: false
        },
        artwork: {
            type: String,
            required: false
        }
    },
    { collection : 'album' }
);

//Create a model derived from the above schema
module.exports = mongoose.model('album', albumSchema);

