const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProjectFullStack = new Schema({
   title: {type: String, required: true},
   description: {type: String, required: true},
   userTest: {type: String, required: true},
   passTest: {type: String, required: true},
   techSkills: [{type: String}] , 
   linkRepository: {type: String, required: true},
   linkDeploy: {type: String, required: true}, 
   image: {type: String, required: true}
});

module.exports = mongoose.model('ProjectFullStack', ProjectFullStack);
