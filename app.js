const express = require('express');
const ejs = require('ejs');
const app = express();
const path= require('path');

const port = 5050;


//TEPMLATE ENGINE
app.set('view engine',"ejs");
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

app.get('/',(request,response)=>{
    response.render('index')
});
app.get('/addpost',(request,response)=>{
    response.render('addpost')
});
app.get('/post',(request,response)=>{
    response.render('post')
});
app.get('/about',(request,response)=>{
    response.render('about')
});
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});