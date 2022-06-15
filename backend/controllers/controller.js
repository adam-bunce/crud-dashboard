let config = require('../config/db')
let connection = config.connection
require('dotenv').config()


function getResource(req, res) {
    if (req.params.id == 'all') {
         connection.query(`SELECT * FROM ${process.env.TABLE}`, 
                            function (err, result) {
                                if (err){ console.log(err); throw err;}
                                res.json({message: "get resource: " + req.params.id, queryResult: result}).status(200)
                            })
    }
    else {
        connection.query(`SELECT * FROM ${process.env.TABLE} WHERE id=${req.params.id}`, 
                             function (err, result) {
                                if (err){ console.log(err); throw err;}
                                console.log(req.params.id)
                                res.json({message: "get resource: " + req.params.id, queryResult: result}).status(200)
                            })
    }
}


function createResource(req, res) {
    connection.query(`INSERT INTO ${process.env.TABLE} (creation_date, textResource, bool) VALUES (now(), '${req.body.textResource}', ${req.body.bool})`,
                        function(err, result) {
                            if (err) {console.log(err); throw err}
                            res.json({message: "resource created"}).status(200);
                        })
    
}


function deleteResource(req, res) {
    connection.query(`DELETE FROM ${process.env.TABLE} WHERE id=${req.params.id}`, 
                        function(err, result) {
                            if (err) throw err
                            res.json({message: `resource of id: ${req.params.id} deleted`}).status(200)
                        })
}


function updateResource(req, res) {
    connection.query(`UPDATE ${process.env.TABLE} SET creation_date = now(), textResource='${req.body.textResource}', bool=${req.body.bool} WHERE id=${req.params.id}`,
                        function(err, result) {
                            if (err) throw err
                            res.json({message: `resource of id: ${req.params.id} updated`}).status(200)
                        })

}


module.exports = {getResource, createResource, deleteResource, updateResource}