const express = require('express');
const multer  = require('multer')
const response = require('../../network/response')
const { addMessage, getMessage, uploadMessage, deleteMessage } = require('./controller'); 

const router = express.Router();
const upload = multer({dest:'public/files/'});

//METODO GET
router.get('/', (req,res) =>{

    const filterMessage = req.query.user || null;
    
    getMessage(filterMessage)
            .then((mesaggeList)=>{
                response.success(req, res, 200 ,mesaggeList);
            })
            .catch(e => {
                response.error(req,res, 400 , "Error al obtener lista", { "message": "Error inesperado." });
            });
});

//METODO POST
router.post('/',upload.single('file') ,( req,res ) =>{

    req.file

    addMessage(req.body.chat, req.body.user , req.body.message, req.file)
            .then((fullMessage) => {
                response.success(req, res, 200 ,fullMessage);
            })
            .catch(e =>{
                response.error(req,res,400, "Informacion Invalida", { "message": "Error inesperado." });
            });
});

//METODO PATH
router.patch('/:id',(req, res) => {
    
    uploadMessage(req.params.id, req.body.message)
        .then((data)=>{
            response.success(req,res, 200, data);
        })
        .catch(e => {
            response.error(req,res,500  , "Error interno", e);
        });
});

//METODO DELETE
router.delete('/:id',( req,res ) => { 

    deleteMessage(req.params.id)
    .then((data)=>{
        response.success(req,res, 200, 'Mensaje eliminado correctamente'+data);
    })
    .catch(e => {
        response.error(req,res,500  , "Error interno", e);
    });
    
});


module.exports = router;