const express = require('express')
const routerProject = express.Router();

const ProjectBack = require('../models/projectsBackend')
const ProjectFull = require('../models/projectsFullStack')

const { UploadImage } = require('../middleware/UploadMulter')

const {validatorBack,validatorFullStack } = require('../validations/validator')

routerProject.get('/getBackendProjects', async (req, res) => {
    try {
        const projects = await ProjectBack.find();
        res.json(projects);
    } catch (err) {
        console.error(err);
    }
});

routerProject.get('/getFullStackProjects', async (req, res) => {
    try {
        const projects = await ProjectFull.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

routerProject.post('/saveProjectBack',validatorBack, async (req, res) => {
    const { title, description, linkRepository } = req.body;

    const project = new ProjectBack({ title, description, linkRepository });

    await project.save();
    return res.json(project);
});

routerProject.post('/saveProjectFull',  UploadImage.single('image'), validatorFullStack,  async (req, res) => {

    if (!req.file) {
        return res.status(400).json({ error: 'Do not provide an image' });
    }

    const { title, description, userTest, passTest, techSkills, linkRepository, linkDeploy } = req.body;
    const image = req.file.filename;

    const techSkillsArray = techSkills.split(',');

    const projectData = { title, description, userTest, passTest, techSkills: techSkillsArray, linkRepository, linkDeploy, image };

    const Project = new ProjectFull(projectData);

    await Project.save();
    return res.json(Project);
});



module.exports = routerProject;


