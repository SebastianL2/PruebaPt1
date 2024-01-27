const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', require('./routes/index'))
app.use(bodyParser.json());
app.set('PORT', process.env.PORT || 3000)

app.listen(app.get('PORT'),()=>console.log(`Server listen at Port ${app.get('PORT')}`))

