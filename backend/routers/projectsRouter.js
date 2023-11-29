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

routerProject.post('/saveProject', async (req, res) => {
    const { linkDeploy, linkRepository } = req.body;

    const project = new Project({linkDeploy, linkRepository});
    
    await project.save();
    return res.json(project);
});

 
module.exports = routerProject;


