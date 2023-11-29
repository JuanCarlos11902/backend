const axios = require('axios');
const express = require('express');

const app = express()

app.get('/obtener-preguntas-generales', async(req,res) =>{

    const respuesta = await axios.get('');

})