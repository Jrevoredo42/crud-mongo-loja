const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeSchema = new Schema({

    _id: { 
        type: mongoose.Schema.Types.ObjectId
     },
    name: String,
    dateAdmiss: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Employe', EmployeSchema);