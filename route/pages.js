const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');

//necessary?
router.get('/',(req, res) => {
    res.render('home')
})

//index replacement
router.get('/home',(req, res) => {
    res.render('home')
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

//THE ONE
router.post('/submitContact', (req, res) => {
    const contact = new Contact ({
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        number: req.body.number,
        reason: req.body.reason,
        text: req.body.text
    });

    Contact.collection.insertOne(contact)
    .then(result => {
        res.render('home')
    })
    .catch(err => console.log(err));
});

module.exports = router;
