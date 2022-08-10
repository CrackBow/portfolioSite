const express = require('express');
const router = express.Router();
const contact = require('./models/contact');

router.get('/',(req, res) => {
    res.render('index')
})

router.get('/about',(req, res) => {
    res.render('about')
})

router.get('/education',(req, res) => {
    res.render('education')
})

router.get('/interests',(req, res) => {
    res.render('interests')
})

router.get('/contact',(req, res) => {
    res.render('contact')
})

router.post('/submitContact', (req, res) => {
    const contact = new Contact({
        fname
    })
})

module.exports = router;
