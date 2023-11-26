const express = require('express')
const routerProject = express.Router();

routerProject.get('/', (req, res) => {

    res.send('Hello Juancho');

});


module.exports = routerProject;


