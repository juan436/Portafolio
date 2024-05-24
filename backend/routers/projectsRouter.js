const express = require('express');
const routerProject = express.Router();

const ProjectBack = require('../models/projectsBackend');
const ProjectFull = require('../models/projectsFullStack');

const { UploadImage } = require('../middleware/UploadMulter');
const { validatorBack, validatorFullStack } = require('../validations/validator');
const { uploadImage } = require('../firebase/config');

routerProject.get('/getBackendProjects', async (req, res) => {
    try {
        const projects = await ProjectBack.find();
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error al obtener los proyectos' });
    }
});

routerProject.get('/getFullStackProjects', async (req, res) => {
    try {
        const projects = await ProjectFull.find();
        res.json(projects);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los proyectos' });
    }
});

routerProject.post('/saveProjectBack', validatorBack, async (req, res) => {
    const { title, description, linkRepository } = req.body;

    const project = new ProjectBack({ title, description, linkRepository });

    try {
        await project.save();
        res.status(201).json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al guardar el proyecto' });
    }
});

routerProject.post('/saveProjectFull', UploadImage.single('image'), validatorFullStack, async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No se proporcionó ninguna imagen' });
        }

        const { title, description, userTest, passTest, techSkills, linkRepository, linkDeploy } = req.body;
        const imageBuffer = req.file.buffer;

        // Subir la imagen a Firebase Storage
        const imageUrl = await uploadImage(imageBuffer);
        console.log('URL de la imagen subida:', imageUrl); // Logging para verificar la URL

        const techSkillsArray = techSkills.split(',');

        const projectData = {
            title,
            description,
            userTest,
            passTest,
            techSkills: techSkillsArray,
            linkRepository,
            linkDeploy,
            image: imageUrl
        };

        console.log('Datos del proyecto:', projectData); // Logging para verificar los datos del proyecto

        const project = new ProjectFull(projectData);
        await project.save();

        res.status(201).json(project);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Hubo un error al guardar el proyecto' });
    }
});

module.exports = routerProject;
