const axios = require('axios');
const express = require('express');

const app = express()

app.get('/obtener-preguntas-generales', async(req,res) =>{
 try {
        const respuesta = await axios.get('https://opentdb.com/api.php?amount=20');
        let arrayDevuelto = [];

        for (let i = 0; i < respuesta.data.results.length; i++) {
            let object = {
                difficulty: respuesta.data.results[i].difficulty,
                question: respuesta.data.results[i].question,
                correctAnswer: respuesta.data.results[i].correct_answer,
                incorrectAnswer: respuesta.data.results[i].incorrect_answers,
            };

            arrayDevuelto.push(object);
        }

        res.json(arrayDevuelto);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).send('Error interno del servidor');
    }
    

})

    app.listen(5000, () =>{
    console.log("Estamos en directo chicos")
})