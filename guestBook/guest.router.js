const { Router } = require("express");
const { addPost, currentPost } = require("./guest.controllers");

const guestBookRouter = Router();

guestBookRouter.post("/", addPost);
guestBookRouter.get("/current", currentPost);

module.exports = guestBookRouter;
