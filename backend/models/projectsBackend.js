 const mongoose = require('mongoose');
 const {Schema} = mongoose

 const ProjectsBackend = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    linkRepository: {type: String, required: true},
 })

 module.exports = mongoose.model('ProjectsBackend', ProjectsBackend);