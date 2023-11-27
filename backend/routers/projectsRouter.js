const express = require('express')
const routerProject = express.Router();

const Project = require('../models/project')

routerProject.get('/', async (req, res) => {
    try {
        const projects = await Project.find();
        console.log(projects);
        res.json('received');
    } catch (err) {
        console.error(err);
    }
});

routerProject.post('/crearProject', async (req, res) => {
    const { linkDeploy,imageProject,archivoProject } = req.body;
    const project = new Project({linkDeploy,imageProject,archivoProject});
    await project.save();
    return res.json(project);
});


module.exports = routerProject;


