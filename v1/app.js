var express = require('express');
var app = express();

bodyParser = require ('body-parser');

var campgrounds = [
    {name: 'Salmon Creek', image:'https://farm3.staticflickr.com/2031/2270475589_3858deb67e.jpg'},
    {name: 'Granite Hill', image:'https://farm4.staticflickr.com/3231/2436513348_f617b82a9e.jpg'},
    {name: "'Mountain Goat's Rest", image:'https://farm8.staticflickr.com/7399/9211397472_e6d0a7c6fd.jpg'}
]

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

/* Routes
hope to change this to it's own module.
*/

app.get('/', (req, res)=>{
    res.render('landing');
})

app.get('/campgrounds', (req, res)=>{
    res.render('campgrounds', {campgrounds: campgrounds});
});

app.post('/campgrounds', (req, res)=>{
    //res.send('you hit the post route');
    //get data from form
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    //add data to array
    campgrounds.push(newCampground); 
    // redirect to /campground
    res.redirect('/campgrounds');

});

app.get('/campgrounds/new', (req, res)=>{
    res.render('new.ejs');
});

app.listen(4000, ()=>{
    console.log('The YelpCamp Server Has Started');
});