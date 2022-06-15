const express = require('express');
const router = express.Router();

const {getResource, createResource, deleteResource, updateResource} = require('../controllers/controller')

// @route: GET http://localhost:8080/api/:id
// @params: id: all or an id of a resource
// @body: none
router.get('/:id', getResource)

// @route: POST http://localhost:8080/api/
// @params: none
// @body: textResource: string any text, bool: boolean value
router.post('/', createResource)

// @route: PUT http://localhost:8080/api/:id
// @params: id of resource to update
// @body: textResource: string any text, bool: boolean value
router.put('/:id', updateResource)

// @route: DELETE http://localhost:8080/api/:id
// @params: id of resource to delete
// @body: none
router.delete('/:id', deleteResource)

module.exports = router;