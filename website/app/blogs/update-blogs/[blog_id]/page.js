"use client";
import { useState, useEffect }   from  'react';
import {useRouter}   from 'next/navigation';
import UpdateBlogForm from '@/components/MyBlogs/UpdateBlog';
import axios               from "axios";


const UpdateBlogs = (props)=>{
   var query_blog_id = false;   
   console.log("query",props.params.blog_id);
   
   var query_blog_id = props.params.blog_id;

   const [blogDetails, setBlogDetails] = useState(false);

   useEffect(()=>{
      // let isMounted = true;   
      // someAsyncOperation().then(data => {
         if(query_blog_id && query_blog_id !== 'undefined'){
            console.log("1 UpdateBlogs query_blog_id => ",query_blog_id);
            axios.get("/api/blogs2/get/single-blog/"+query_blog_id)
               .then(res => {
                  console.log("blogDetails -> ",res);
                  var blogData = res.data;
                  if(blogData){
                     setBlogDetails(res.data);
                  }else{
                     // setBlogDetails(true);
                  }
               })
               .catch(error =>{
                  console.log("error -> ",error);
                  new swal("Something went wrong",error.message,"error");         
               })
         }   
      // })
      // return () => { isMounted = false };
      
   },[query_blog_id])   

  return (
   <div className=""> 
      {
         query_blog_id && blogDetails
         ?
            <UpdateBlogForm
            blog_id={query_blog_id}
            blogDetails={blogDetails}/>
         : 
            <div> Loading ... </div>
      }
   </div>
  );
}


export default UpdateBlogs;