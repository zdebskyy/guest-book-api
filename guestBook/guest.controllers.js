const postModel = require("./guest.model");

class postControllers {
  async addPost(req, res) {
    const { name, comment } = req.body;

    const newPost = new postModel({
      name,
      comment,
    });

    await newPost.save();
    res.status(201).json({ message: "New post added" });
  }
}

module.exports = new postControllers();
