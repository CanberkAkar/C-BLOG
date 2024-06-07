const Blog= require('../models/Blog');

exports.addPage=async(request,response)=>{
    await response.render('addpost')
 }
 exports.editPage=async(request,response)=>{
    await response.render('post')
}
exports.aboutPage=async(request,response)=>{

   await response.render('about')
}