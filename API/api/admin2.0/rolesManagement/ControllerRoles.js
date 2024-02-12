const mongoose	= require("mongoose");
const Role      = require('./ModelRoles.js');

exports.create_role = (req,res,next)=>{
    if(req.body.role){
    	Role.findOne({role:req.body.role})
    		.exec()
    		.then(data =>{
                // console.log("data",data)
    			if(data){
    				res.status(200).json({
                        duplicated : true,
    					message    : ' Role already exists'
    				});
    			}else{
    				const role = new Role({
                        _id             : new mongoose.Types.ObjectId(),
                        role            : req.body.role,
                        roleDescription : req.body.roleDescription,
                        createdBy       : req.body.user_ID,
                        createdAt       : new Date(),

                    });
                    role.save()
                    .then(data=>{
                            res.status(200).json({
                                created : true,
                                message : "ROLE_ADDED",
                                ID      : data._id
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
    }else{
        res.status(200).json("Role is Mandatory");
    }
};
exports.list_role = (req,res,next)=>{
    Role.find()
        .sort({ createdAt: -1 })
        .exec()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};


exports.list_role_with_limits = (req,res,next)=>{
    Role.find()
        .skip(req.body.startRange)
        .limit(req.body.limitRange)
        .sort({ createdAt: -1 })
        .exec()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};


exports.list_role_with_pagesize = (req,res,next)=>{
    var startRange= parseInt(req.params.currentpage)*parseInt(req.params.pagesize)
    var limitRange= parseInt(req.params.pagesize)+parseInt(req.params.currentpage)
    console.log("startRange",startRange,"limitRange",limitRange
    )
    Role.find()
        .skip(startRange)
        .limit(limitRange)
        .sort({ createdAt: -1 })
        .exec()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
exports.detail_role = (req,res,next)=>{
    Role.findOne({_id:req.params.ID})
        .exec()
        .then(data=>{
            if(data){
                res.status(200).json(data);
            }else{
                res.status(404).json('ROLE_NOT_FOUND');
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
exports.update_role = (req,res,next)=>{ 
    console.log("req.body patch",req.body)
    
    if(req.body.role){
        Role.findOne({role:req.body.role})
    		.exec()
    		.then(data =>{

    			if(data){
    				return res.status(200).json({
    					message: ' Role already exists'
    				});
    			}else{
    				Role.updateOne(
                                { _id:req.body.fieldID},  
                                {
                                    $set:{
                                        "role" : req.body.role,
                                        "roleDescription" : req.body.roleDescription,
                                    }
                                }
                            )
                            .exec()
                            .then(data=>{
                                if(data.nModified === 1){
                                    //res.status(200).json("ROLE_UPDATED");
                                     Role.updateOne(
                                        { _id:req.body.fieldID},
                                        {
                                            $push:  { 'updateLog' : [{  updatedAt      : new Date(),
                                                                        updatedBy      : req.body.updatedBy 
                                                                    }] 
                                                    }
                                        })
                                        .exec()
                                        .then(data=>{
                                            res.status(200).json({ updated : true });
                                        })
                                }else{
                                     res.status(200).json({ updated : false });
                                }
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
    }else{
        res.status(200).json("Role is Madatory");
    }
};
exports.delete_role = (req,res,next)=>{
    console.log("req.params.ID ",req.params.ID);
    Role.deleteOne({_id:req.params.ID})
        .exec()
        .then(data=>{
            console.log('data ',data);
            if(data.deletedCount === 1){
               res.status(200).json({ deleted : true });
            }else{
               res.status(200).json({ deleted : false });
            }
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
exports.delete_all_role = (req,res,next)=>{
    Role.deleteMany({})
        .exec()
        .then(data=>{
            res.status(200).json("All Roles deleted");
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
