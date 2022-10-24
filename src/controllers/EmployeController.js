const  EmployeService = require('../services/EmployeService.js');


exports.getAllEmploye = async (req, res) => {
    try {
        const employees = await EmployeService.getAllEmploye();
        res.json({data: employees, status: "sucess"});
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

exports.getEmployeById = async (req, res) => {
    try{
        const employe = await EmployeService.getEmployeById(req.params.id);
        res.json({ data: employe, status: 'sucess' });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};


exports.createEmploye = async (req, res) => {
    try {
        const employe = await EmployeService.createEmploye(req.body);
        res.json({ data: employe, status: 'sucess' });
    } catch(err){
        res.status(500).json({ error: err.message });
    }

};

exports.updtadeEmploye = async (req, res) => {
    try{
        const employe = await EmployeService.updateEmploye(req.params.id, req.body);
        res.json({ data: employe, status: 'sucess' });        
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};

exports.deleteEmploye = async(req,res) => {
    try{
        const employe = await EmployeService.deleteEmploye(req.params.id);
        res.json({ data: employe, status: 'sucess' });
    } catch(err){
        res.status(500).json({ error: err.message });
    }
};
