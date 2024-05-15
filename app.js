//KENDİ PROJEMİZ İÇERİSİNDE ÇALIŞIRKEN DOSYALARIN HEPSİNİN GIT'DE OLMASINI İSTEMEYİZ.
//GITIGNORE GÖZÜKMEMESİNİ SAĞLAR.
const express = require('express');
const app = express();


const port = 5050;

app.get('/',(request,response)=>{
    const blog = { id: 1, title: "Blog title", description: "Blog description" }
    response.send(blog);
});
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});