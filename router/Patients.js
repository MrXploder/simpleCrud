(function() {
  const PatientsRouter  = require('express').Router();
  const PatientsModel = require('../model/Patients');

  /*INITIALIZE A PARAM THAT IS USED MULTIPLE TIMES*/
  PatientsRouter.param('patientId', function(req, res, next){
    PatientsModel.findById(req.params.patientId).then(function(patient){
      req.item = patient;
      next();
    });
  });

  /*DEFINE A GENERAL POST, NOT BINDED BY ANY ESPECIFIC ID*/
  PatientsRouter.post('/', function(req, res, next){
    let item = new PatientsModel(req.body);
    console.log(item);
    item.save().then(function(item){
      res.send(item);
    });
  });

  /*DEFINE A GENERAL GET, TO FETCH ALL THE RESOURCES FROM DB*/
  PatientsRouter.get('/', function(req, res, next){
    PatientsModel.find({}).lean().then(function(patients){
      res.send(patients);
    });
  });

  /*BASED ON PREVIUS ROUTER.PARAM, DEFINE GET, PUT AND DELETE FOR THAT PARAM*/
  PatientsRouter.route('/:patientId')
  .get(function(req, res, next){
    res.send(req.item);
  })
  .put(function(req, res, next){
    req.item.set(req.body);
    req.item.save().then(function(item){
      res.send(item);
    });
  })
  .delete(function(req, res, next){
    req.item.remove().then(function(){
      res.send({});
    })
  });

  /*EXPORT ROUTER*/
  module.exports = PatientsRouter;
})();