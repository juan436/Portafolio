 const mongoose = require('mongoose');
 const {Schema} = mongoose

 const ProjectSchema = new Schema({
    linkDeploy: {type: String, required: true},
    imageProject:  {type: String, required: true},
    archivoProject: {type: String, required: true}
 })

 module.exports = mongoose.model('Project', ProjectSchema);