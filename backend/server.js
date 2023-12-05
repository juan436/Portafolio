const express = require('express')
const path = require('path');
const morgan = require('morgan')
const port = process.env.PORT || 3001;

const { mongoose } = require('./database')
const app = express();

// Settings
app.set('port', port)

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static('uploads'));


// Routes
const routerProject = require('./routers/projectsRouter')
app.use('/api/projects',routerProject);

//Prueba de funcionamiento
app.get('/', (req, res)=>{
    res.send('Prueba de funcionamiento de backend 🖥️')
});


app.listen(app.get('port'), () => {
    console.log(`El servidor esta escuchando en el puerto ${app.get('port')}`);
})