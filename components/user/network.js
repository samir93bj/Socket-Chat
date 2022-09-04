 const express = require('express');
 const response = require('../../network/response');
 const { addUser, getUser } = require('./controller'); 

 const router = express.Router();

//ROUTE POST
 router.post('/',(req,res) => {
    
    addUser(req.body.name)
        .then((user) => {
            response.success(req,res,200,user)
        })
        .catch(e => {
            response.error(req,res,400,'Error en servicios '+e, {"Message":"Ocurrio un fallo en el sistema"});
        });

 });

 //ROUTE GET
 router.get('/',(req,res) => {

    const filter = req.query.name || null;

    getUser(filter)
        .then(data => {
            response.success(req,res,200,data);
        })
        .catch(e => {
            response.error(req,res,400,'Error en servicios '+e, {'Message':'Usuario Inexistente'})
        });
 });

 module.exports = router;
 