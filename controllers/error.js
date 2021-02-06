exports.get404Page=(req,res,next)=>{
    //console.log('in  middleware');   
    res.render('404',{pageTitle:'Page Not Found' ,path:'/404'});
    
};