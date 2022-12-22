const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [
            3,
            " The Name should be at least 3 characters "
        ]
    },
position:{
    type: String,
        required: [
            true,
            "Position is required"
        ],
        minLength: [
            3,
            " The Position should be at least 3 characters "
        ]
},
status: {
    type: String,
    default: "undecided"
}
   

}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

