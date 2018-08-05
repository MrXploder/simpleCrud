const PatientsRouter  = require('express').Router();
const PatientsModel = require('../model/Patients');

const _ = require('lodash');
const _itemsPerPage = 10;

/*INITIALIZE A PARAM THAT IS USED MULTIPLE TIMES*/
PatientsRouter.param('patientsId', function(req, res, next){
  PatientsModel.findById(req.params.PatientsId).then(function(_data){
    console.log(_data);
    req.item = _data;
    next();
  });
});

/*DEFINE A GENERAL POST, NOT BINDED BY ANY ESPECIFIC ID*/
PatientsRouter.post('/', function(req, res, next){
  let item = new PatientsModel(req.body);
  item.save.then(_data => res.status(201).json(_data));
});

PatientsRouter.get('/', function(req, res, next){
  PatientsModel.find({}).lean().then(function(patients){
    res.json(patients);
  });
});

PatientsRouter.route('/:patientsId')
.get(function(req, res, next){
  res.json(req.item);
})
.put(function(req, res, next){
  req.item.set(req.body);
  req.item.save(function(item){
    res.json(item);
  });
})
.delete(function(req, res, next){
  req.item.remove(function(){
    res.json({});
  });
});

module.exports = PatientsRouter;