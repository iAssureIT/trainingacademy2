const mongoose          = require("mongoose");
const SEODetails        = require('./model.js');

exports.insertSEODetails = (req,res,next)=>{
    // console.log("req.body",req.body)
    processData();
    async function processData(){
        var allSEODetails = await fetchSEODetails();
        var seoDetails;
        if( allSEODetails?.length>0){
            seoDetails = allSEODetails.filter((data)=>{
                if (data.url?.trim().toLowerCase() == req.body.url.trim().toLowerCase()) {
                    return data;
                }
            })
        }
        if (seoDetails?.length > 0) {
            res.status(200).json({ duplicated : true });
        }else{
            const seoDetails = new SEODetails({
                _id                         : new mongoose.Types.ObjectId(),
                url                         : req.body.url,
                metaTagTitle                : req.body.metaTagTitle,
                metaDescription             : req.body.metaDescription,
                keywords                    : req.body.keywords,
                canonicalUrl                : req.body.canonicalUrl,
                createdBy                   : req.body.createdBy,
                createdAt                   : new Date()
            })
            seoDetails.save()
            .then(data=>{
                res.status(200).json({ created : true, fieldID : data._id });
            })
            .catch(err =>{
                console.log("err",err.code)
                if (err.code == 11000) {
                    res.status(200).json({ duplicated : true });
                }else{
                    res.status(500).json({ error: err });
                }
                    
            });
        }
    }       
};

var fetchSEODetails = async ()=>{
    return new Promise(function(resolve,reject){ 
    SEODetails.find({})
        .sort({createdAt : -1})
        .then(data=>{
            resolve( data );
        })
        .catch(err =>{
            reject(err);
        }); 
    });
};

exports.countSEODetails = (req, res, next)=>{
    SEODetails.find({}).count()
        .exec()
        .then(data=>{
            res.status(200).json({ count : data });
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        }); 
};

exports.fetchSEODetails = (req, res, next)=>{
    SEODetails.find({})
        .sort({createdAt : -1})
        .skip(req.body.startRange)
        .limit(req.body.limitRange)
        .exec()
        .then(data=>{
            // console.log("data",data)
            res.status(200).json(data);
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        }); 
};

exports.getSEODetails = (req, res, next)=>{
    SEODetails.find({})
        // .sort({url : 1})
        .then(data=>{
            var seoData= data?.map((item,index)=>{
                return {
                    url:item.url,
                    metaTagTitle:item.metaTagTitle,
                    metaDescription:item.metaDescription,
                    canonicalUrl:item.canonicalUrl,
                    keywords:item.keywords,
                }
            })
            res.status(200).json(seoData);
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        }); 
};
exports.fetchSingleSEODetails = (req, res, next)=>{
    SEODetails.findOne({ _id: req.params.fieldID })
        .exec()
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        }); 
};


exports.fetchSEODetailsByURL = (req, res, next)=>{
    console.log("url1",req.params.url)
    var url=req.params.url;
    // if(url==="/search-results/undefined/undefined" || url==="/search-results//"){
    //     url="/search-results/*/*"
    // }
    const decodedURL = decodeURIComponent(url);
    console.log("url2", decodedURL);
    SEODetails.findOne({ url: decodedURL })    
        .then(data=>{
            console.log("data",data)
            res.status(200).json(data);
        })
        .catch(err =>{
            console.log("err",err)
            res.status(500).json({ error: err });
        }); 
};
exports.searchSEODetails = (req, res, next)=>{
    SEODetails.find({ url: { $regex : req.params.str ,$options: "i" }  })
        // .sort({businessCategory : 1})
        .then(data=>{
            res.status(200).json(data);
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        }); 
};
exports.updateSEODetails = (req, res, next)=>{
    SEODetails.updateOne(
            { _id:req.params.fieldID },  
            {
                $set:   {
                    url                         : req.body.url,
                    metaTagTitle                : req.body.metaTagTitle,
                    metaDescription             : req.body.metaDescription,
                    keywords                    : req.body.keywords,
                    canonicalUrl                : req.body.canonicalUrl,
                }
            }
        )
        .exec()
        .then(data=>{
            if(data.nModified == 1){
                SEODetails.updateOne(
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
            res.status(500).json({ error: err });
        });
};
exports.deleteSEODetails = (req, res, next)=>{
    SEODetails.deleteOne({_id: req.params.fieldID})
        .exec()
        .then(data=>{
            if(data.deletedCount === 1){
                res.status(200).json({ deleted : true });
            }else{
                res.status(200).json({ deleted : false });
            }
        })
        .catch(err =>{
            res.status(500).json({ error: err });
        });            
};