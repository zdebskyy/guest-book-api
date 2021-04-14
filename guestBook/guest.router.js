const { Router } = require("express");
const { addPost } = require("./guest.controllers");

const guestBookRouter = Router();

guestBookRouter.post("/", addPost);

module.exports = guestBookRouter;
