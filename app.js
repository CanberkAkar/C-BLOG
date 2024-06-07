const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const Blog= require('./models/Blog');
const methodOverride = require('method-override');
const blogController=require('./controllers/blogControllers');
const pageController=require('./controllers/pageControllers');

const port = 5050;

mongoose.connect('mongodb://localhost/c-blog')
    .then(() => console.log('Database connection successful'))
    .catch(err => console.error('Database connection error:', err));

//TEPMLATE ENGINE
//middleware: request response döngüsü içerisindeki her şeye denir. her şey bu ikisnini arasında yazılır.

app.set('view engine',"ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method', {
    methods: ['POST', 'GET']
}));
//MIDDLEWARE
// const myLogger=(req,res,next)=>{
//     console.log("middleware log 1");
//     next();
// }
// const myLogger2=(req,res,next)=>{
//     console.log("middleware log 2");
//     next();
// }
//next kullanmamızın sebebi kullanılmadığı taktirde res ve req arasında gidip gelir


//statik dosyalarımız için public klasörünü kullan
app.use(express.static('public'));

app.get('/',blogController.getBlog);
app.get('/blogPage/:id',blogController.getBlogValue);
app.post('/insertBlog',blogController.insertBlog);
app.put('/updateBlog/:id',blogController.updateBlog);
app.delete('/deletePhoto/:id',blogController.deleteBlog)
app.get('/addpost',pageController.addPage);
app.get('/blogPage/editpost/:id',blogController.editValue)
app.get('/about',pageController.aboutPage);

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});