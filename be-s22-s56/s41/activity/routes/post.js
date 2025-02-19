//[SECTION] Dependencies and Modules
const express = require('express');
const postController = require("../controllers/post");

//[SECTION] Routing Component
const router = express.Router();

router.post("/", (req, res)=> {
    
    postController.addPost(req.body).then(resultFromController => res.send(resultFromController));

})

router.get("/", (req, res) => {

    postController.getPosts().then(resultFromController => res.send(resultFromController));

})

router.patch("/:id", (req, res) => {

    postController.updateTitle(req.params.id,req.body).then(resultFromController => res.send(resultFromController));

})

router.delete("/:id", (req, res) => {

    postController.deletePost(req.params.id).then(resultFromController => res.send(resultFromController));

})

module.exports = router;