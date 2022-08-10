const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const route = require('./route/pages');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', route);

mongoose.connect("mongodb+srv://dWhite:DThffyclZOYjcYA4@cluster0.c2br7ih.mongodb.net/portfolioDB", {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    app.listen(3000, () => {
        console.log("server is running on 3000")
    })
}).listen(process.env.PORT || 3000)

//dWhite
//smR2mgBMewG7rEsT