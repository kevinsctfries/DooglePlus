import express from "express";
import { getPosts } from "../contollers/post.js";

const router = express.Router();

router.get("/", getPosts);
// router.post("/", addPost);
// router.delete("/:id", deletePost);

export default router;
