var express = require('express');
var app = express();

app.set('view engine', 'ejs');

/* Routes
hope to change this to it's own module.
*/

app.get('/', (req, res)=>{
    res.render('landing');
})

app.get('/campgrounds', (req, res)=>{
    var campgrounds = [
        {name: 'Salmon Creek', image:'https://pixabay.com/get/eb37b9082df3003ed1584d05fb1d4e97e07ee3d21cac104497f3c57aa6e8bcbf_340.jpg'},
        {name: 'Granite Hill', image:'https://farm4.staticflickr.com/3231/2436513348_f617b82a9e.jpg'},
        {name: "'Mountain Goat's Rest", image:'https://farm8.staticflickr.com/7399/9211397472_e6d0a7c6fd.jpg'}
    ]

    res.render('campgrounds', {campgrounds: campgrounds});
});


app.listen(4000, ()=>{
    console.log('The YelpCamp Server Has Started');
});