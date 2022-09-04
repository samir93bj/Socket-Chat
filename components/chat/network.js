const express = require('express');
const response = require('../../network/response')
const { addChat , getChat} = require('./controller'); 

const router = express.Router();

router.post('/', (req,res) => {
    
    addChat(req.body.users)
    .then(data => {
        response.success(req,res,200,data);
    })
    .catch(e => {
        response.error(req,res,'Error en servicios '+ e, {"Message":"Ocurrio un fallo en el sistema"});
    })
}); 

router.get('/:userId', (req, res)=>{
    getChat(req.params.userId)
        .then(users => {
            response.success(req, res, 200, users);
        })
        .catch( e => {
            response.error(req,res,'Error en servicios '+ e, {"Message":"Ocurrio un fallo en el sistema"});
        })
});

module.exports = router