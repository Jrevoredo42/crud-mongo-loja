const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    setor: {
        type: Number,
        required: true
    },
    dateAdmiss: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Employe', EmployeSchema);