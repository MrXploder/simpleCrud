const PatientsRouter  = require('express').Router();
const PatientsModel = require('../model/Patients');

const _ = require('lodash');
const _itemsPerPage = 10;

/*INITIALIZE A PARAM THAT IS USED MULTIPLE TIMES*/
PatientsRouter.param('patientId', function(req, res, next){
  PatientsModel.findById(req.params.patientId).then(function(_data){
    console.log(_data);
    req.item = _data;
    next();
  });
});

/*DEFINE A GENERAL POST, NOT BINDED BY ANY ESPECIFIC ID*/
PatientsRouter.post('/', function(req, res, next){
  let item = new PatientsModel(req.body);
  console.log(item);
  item.save(function(data){
    res.json(data).end();
  });
});

PatientsRouter.get('/', function(req, res, next){
  PatientsModel.find({}).lean().then(function(patients){
    res.json(patients);
  });
});

PatientsRouter.route('/:patientId')
.get(function(req, res, next){
  res.json(req.item).end();
})
.put(function(req, res, next){
  req.item.set(req.body);
  req.item.save(function(item){
    res.json(item).end();
  });
})
.delete(function(req, res, next){
  req.item.remove(function(){
    res.json({}).end();
  });
});

module.exports = PatientsRouter;