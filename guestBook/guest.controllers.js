const postModel = require("./guest.model");

class postControllers {
  async addPost(req, res) {
    const { name, comment } = req.body;

    const newPost = new postModel({
      name,
      comment,
    });

    await newPost.save();
    res.status(201).json(newPost);
  }

  async currentPost(req, res) {
    const data = await await postModel.aggregate([
      {
        $sort: { createdAt: -1 },
      },
    ]);
    res.status(200).json(data);
  }
}

module.exports = new postControllers();
