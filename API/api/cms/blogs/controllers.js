const mongoose          = require("mongoose");
const Blogs             = require('./models.js');
const objectId       	= require('mongodb').objectId;
exports.create_blogs = (req, res, next) => {

    console.log("create_blogs req.body => ",req.body);

    Blogs.findOne({blogTitle:req.body.blogTitle})
        .exec()
        .then(data =>{
            if(data){
                return res.status(200).json({
                    message : 'Blog already exists.',
                    details : data
                });
            }else{
                const blog = new Blogs({
                    "_id"           : mongoose.Types.ObjectId(), 
                    "blogTitle"     : req.body.blogTitle,
                    "blogContent"   : req.body.blogContent, //(CK Editor Rich text)
                    "bannerImage"   : req.body.bannerImage,
                    "blogURL"       : req.body.blogURL,
                    "images"        : req.body.images,
                    "videos"        : req.body.videos, //(YouTube Link only)
                    "typeOfBlog"    : req.body.typeOfBlog, //(Regular/Premium)
                    "summary"       : req.body.summary,
                    "createdBy"     : req.body.user_id, //_id of User or null
                    "createdAt"     : new Date(),     
                });
                
                blog.save()
                    .then(data=>{
                        console.log("saved blog = ",data);
                            res.status(200).json({
                                                success : true,
                                                message : "BlOG_DETAILS_INSERTED",
                                                _id     : data._id,
                                                blogURL : data.blogURL
                                            });
                        })
                        .catch(err =>{
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
exports.fetch_blog = (req,res,next) => {
    console.log("req.params.ID=====>",req.params.ID)
    Blogs.findOne({_id : req.params.ID})
         .exec()
         .then(blog=>{ 
            console.log("blog=====>",blog)
            if(blog){
                Blogs.updateOne(
                        { "_id" : req.params.ID},
                        {
                            $inc : { noofVisited : 1}
                        }
                    )
                     .exec()
                     .then(data=>{
                        res.status(200).json(blog);
                     })
                     .catch(err =>{
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });            
            }else{
                res.status(200).json({message : "DATA_NOT_FOUND"})
            }
         })
         .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_blog_url = (req,res,next) => {
    console.log("fetch_blog_url req.params.blogURL => ",req.params.blogURL);
    
    Blogs.findOne({"blogURL" : req.params.blogURL})
         .populate("createdBy")
         .exec()
         .then(blog=>{
            console.log("fetch_blog_url => ",blog);

            if(blog){
                Blogs.updateOne(
                        { "blogURL" : req.params.blogURL},
                        {
                            $inc : { noofVisited : 1}
                        }
                    )
                     .exec()
                     .then(data=>{
                        res.status(200).json(blog);
                     })
                     .catch(err =>{
                            console.log(err);
                            res.status(500).json({
                                error: err
                            });
                        });            
            }else{
                res.status(200).json({message : "DATA_NOT_FOUND"})
            }
         })
         .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_blog_all = (req,res,next) => {
    var limitRange    = 10;
    var countNum2   = limitRange * req.params.pageno;
    var startRange  = countNum2 - limitRange;
    Blogs.find({})
         .sort({createdAt : -1})
         // .skip(startRange)
         // .limit(limitRange)
         .exec()
         .then(data=>{
            if(data.length > 0){
                res.status(200).json(data);
            }else{
                res.status(200).json({message : "DATA_NOT_FOUND"})
            }
         })
         .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_blog_all_list = (req,res,next) => {
    var limitRange    = 10;
    var countNum2   = limitRange * req.params.pageno;
    var startRange  = countNum2 - limitRange;
    Blogs.find({})
         .sort({createdAt : -1})
         // .skip(startRange)
         // .limit(limitRange)
         .select("blogTitle bannerImage summary createdBy createdAt")
         .exec()
         .then(data=>{
            if(data.length > 0){
                res.status(200).json(data);
            }else{
                res.status(200).json({message : "DATA_NOT_FOUND"})
            }
         })
         .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_blog_all_type = (req,res,next) => {
    var limitRange    = 10;
    // var countNum2   = limitRange * req.params.pageno;
    // var startRange  = countNum2 - limitRange;
    Blogs.find({"typeOfBlog":req.params.type})
         .sort({createdAt : -1})
         .skip(startRange)
         .limit(limitRange)
         .exec()
         .then(data=>{
            if(data.length > 0){
                res.status(200).json(data);
            }else{
                res.status(200).json({message : "DATA_NOT_FOUND"})
            }
         })
         .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.fetch_blog_all_type_list = (req,res,next) => {
    var limitRange    = 10;
    var countNum2   = limitRange * req.params.pageno;
    var startRange  = countNum2 - limitRange;
    Blogs.find({"typeOfBlog":req.params.type})
         .sort({createdAt : -1})
         // .skip(startRange)
         // .limit(limitRange)
         .select("blogTitle bannerImage summary createdBy createdAt")
         .exec()
         .then(data=>{
            if(data.length > 0){
                res.status(200).json(data);
            }else{
                res.status(200).json({message : "DATA_NOT_FOUND"})
            }
         })
         .catch(err =>{
                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                });
};
exports.patch_blog = (req,res,next) => {
    Blogs.updateOne(
                        {_id:req.params.ID},
                        {
                            $set : {
                                "blogTitle"     : req.body.blogTitle,
                                "blogContent"   : req.body.blogContent, //(CK Editor Rich text)
                                "bannerImage"   : req.body.bannerImage,
                                "images"        : req.body.images,
                                "blogURL"       : req.body.blogURL,
                                "videos"        : req.body.videos, //(YouTube Link only)
                                "typeOfBlog"    : req.body.typeOfBlog, //(Regular/Premium)
                                "summary"       : req.body.summary,
                                "createdBy"     : req.body.createdBy, //_id of User or null
                            }
                        }
                    )
         .exec()
         .then(data=>{
            if(data.nModified === 1){
                res.status(200).json({message : "BLOG_UPDATED"})
            }else{
                res.status(200).json({message : "BLOG_NOT_UPDATED"})
            }
         })
};
exports.delete_blog = (req,res,next) =>{
    Blogs.deleteOne({_id:req.params.ID})
         .exec()
         .then(data=>{
            if(data.deletedCount === 1){
                res.status(200).json({message : "BLOG_DELETED"})
            }else{
                res.status(200).json({message : "BLOG_NOT_DELETED"})
            }
         })
};
exports.get_count_blog = (req,res,next) => {
    Blogs.findOne({_id : req.params.ID})
         .exec()
         .then(data=>{
            if(data){
                res.status(200).json({"count": data.noofVisited});
            }else{
                res.status(200).json({message : "BLOG_NOT_FOUND"})
            }
         })
         .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
exports.get_count_blog_url = (req,res,next) => {
    Blogs.findOne({"blogURL" : req.params.blogURL})
         .exec()
         .then(data=>{
            if(data){
                res.status(200).json({"count": data.noofVisited});
            }else{
                res.status(200).json({message : "BLOG_NOT_FOUND"})
            }
         })
         .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.delete_blog_url = (req,res,next) =>{
    Blogs.deleteOne({"blogURL" : req.params.blogURL})
         .exec()
         .then(data=>{
            if(data.deletedCount === 1){
                res.status(200).json({message : "BLOG_DELETED"})
            }else{
                res.status(200).json({message : "BLOG_NOT_DELETED"})
            }
         })
};



