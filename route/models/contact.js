const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    fName: {
        type: String
    },
    lName: {
        type: String
    },
    email: {
        type: String
    },
    number: {
        type: String
    },
    reason: {
        type: String
    },
    text: {
        type: String
    }
})

module.exports = mongoose.model('Contact', contactSchema);