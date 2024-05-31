const express = require('express');
const ejs = require('ejs');
const app = express();
const mongoose = require('mongoose');
const Blog= require('./models/Blog')
const port = 5050;

mongoose.connect('mongodb://localhost/c-blog')
    .then(() => console.log('Database connection successful'))
    .catch(err => console.error('Database connection error:', err));

//TEPMLATE ENGINE
app.set('view engine',"ejs");
app.use(express.urlencoded({extended:true}))
app.use(express.json())
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

//middleware: request response döngüsü içerisindeki her şeye denir. her şey bu ikisnini arasında yazılır.

//statik dosyalarımız için public klasörünü kullan
app.use(express.static('public'));
//ROUTES

app.get('/',async(request,response)=>{
    const blog= await Blog.find({});
    response.render('index',{blog})
});
app.get('/addpost',(request,response)=>{
    response.render('addpost')
});
app.get('/blogPage/:id',async(request,response)=>{
    console.log(request.params.id);
    const blog= await Blog.findById(request.params.id);
    response.render('post',{blog});
})
app.get('/post',(request,response)=>{
    response.render('post')
});
app.post('/insertBlog',async(request,response)=>{
    await Blog.create(request.body);
    response.redirect('/')
});
app.get('/about',(request,response)=>{

    response.render('about')
});
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});