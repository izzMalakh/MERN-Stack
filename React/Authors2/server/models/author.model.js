const mongoose = require('mongoose');
const AuthorSchema = new mongoose.Schema({
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
   

}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);

