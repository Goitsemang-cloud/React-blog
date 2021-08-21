const router  = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//create post router
router.post("/", async (req,res)=>{
   const newPost  = new Post(req.body);
   try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
   } catch(err){
       res.status(500).json(err)
   }
});

//update post router
router.put("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatePost = await Post.findByIdAndUpdate(req.params.id,{
                    $set: req.body,
                },
                { new:true }
                );
                res.status(200).json(updatePost);
            } catch(err){
                res.status(401).json("you can only update your post!");
            }
        } else{
            res.status(401).json("you can only update your post!");
        }
      
        
    } catch(err){
        res.status(500).json(err);
    }
});
//delete post router
router.delete("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("Post deleted...");
            } catch(err){
                res.status(401).json("you can only delete your post!");
            }
        } else{
            res.status(401).json("you can only delete your post!");
        }
      
        
    } catch(err){
        res.status(500).json(err);
    }
});

//get post router
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch(err) {
        res.status(500).json("there's no user with such an id!");
    }
});

//get all post router

router.get("/", async (req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try{
        let posts;
        if(username){
            posts = await Post.find({ username })
        } else if(catName){
            posts = await Post.fin({categories:{
                $int:[catName],
            }})
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts)
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;