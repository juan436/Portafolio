const express = require('express')
const path = require('path');
const cors = require('cors');
const morgan = require('morgan')
const port = process.env.PORT || 4000;

const { mongoose } = require('./database')
const app = express();

// Settings
app.set('port', port)
app.use(cors());

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