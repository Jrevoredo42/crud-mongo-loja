const EmployeModel = require('../model/Employe');


exports.getAllEmploye= async () => {
    return await EmployeModel.find();
}

exports.createEmploye =  async(employe) => {
    return await EmployeModel.create(employe);
}

exports.getEmployeById = async(id) => {
    return await EmployeModel.findById(id);
};

exports.updateEmploye = async(id, employe) => {
    return await EmployeModel.findByIdAndUpdate(id, employe);
}

exports.deleteEmploye = async(id) => {
    return await EmployeModel.findByIdAndDelete(id);
}














