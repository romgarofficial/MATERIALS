//[SECTION] Dependencies and Modules
const Post = require("../models/Post");

//[SECTION] Create a new course

module.exports.addPost = (reqBody) => {

  return Post.findOne({title : reqBody.title}).then((result) => {

		if(result != null && result.title == reqBody.title){

			return ("Duplicate Post found");

		} else {

			let newPost = new Post({
				title : reqBody.title,
                content: reqBody.content
			});

			return newPost.save()
            .then((savedPost) => ("New Post created"))
            .catch(err => (err))
		}

	}).catch(err => (err))

}

module.exports.getPosts = (reqBody) => {

    return Post.find({})
	.then((result) => (result))
	.catch((err) => (err))
  
}

module.exports.updateTitle = (id, reqBody) => {

    return Post.findById(id).then(result => {

        result.title = reqBody.title;
    
        return result.save()
        .then((updatedPost) => (updatedPost))
        .catch(err => ("Update failed"))
    
    //Catch the error and send a message to the client.	
    }).catch(err => ("Find Failed"))
  
}

module.exports.deletePost = (id) => {

    return 	Post.findByIdAndRemove(id)
	.then(deletedPost => (deletedPost))
	.catch(err => ("delete failed"))

}


