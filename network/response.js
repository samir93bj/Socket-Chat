exports.success = (req, res, status,message) => {

    if(status || 200){
        res.status(status).send({
            "error": "",
            "body": message
        });
    }
    
}

exports.error= (req, res, status,details,message) => {

    console.error('[Response Error] ',details);

    if(status || 500){
        res.status(status).send({
            "error": message,
            "body":"" 
        });
    }
} 