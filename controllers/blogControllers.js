const Blog= require('../models/Blog');

exports.getBlog = async(request,response)=>{
    const blog= await Blog.find({});
    response.render('index',{blog})
}
exports.getBlogValue =async(request,response)=>{
    console.log(request.params.id);
    const blog= await Blog.findById(request.params.id);
    response.render('post',{blog});
}
exports.insertBlog=async(request,response)=>{
    await Blog.create(request.body);
    response.redirect('/')
}
exports.getEditValue=async(request,response)=>{
    console.log(request.params.id);
    const blog= await Blog.findOne({ _id: request.params.id });
    response.render('editpost',{blog});
}
exports.updateBlog=async(request,response)=>{
    try {
        const blog = await Blog.findOne({ _id: request.params.id });
        if (!blog) {
            return response.status(404).send('Value not found');
        }
        blog.name = request.body.name;
        blog.text = request.body.text;
        await blog.save(); // Save işlemini beklemek için await kullanın
        response.redirect(`/blogPage/${request.params.id}`);
    } catch (error) {
        console.error('Error updating photo:', error);
        response.status(500).send('Server Error');
    }
}
exports.deleteBlog=async(request,response)=>{
    try {
        await Blog.findByIdAndDelete(request.params.id);
        response.redirect('/');

    } catch (error) {
        console.log("error",error);
        response.status(500).send('An error occurred while deleting the photo');
    }
}
exports.editValue=async(request,response)=>{
    console.log(request.params.id);
    const blog= await Blog.findOne({ _id: request.params.id });
    response.render('editpost',{blog});
}