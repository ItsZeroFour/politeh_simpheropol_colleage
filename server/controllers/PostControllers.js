import { validationResult } from "express-validator";
import PostModel from "../models/Post";

export const createPost = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { image, title, text } = req.body;

    const post = new PostModel({ image, title, text });

    await post.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Не удалось создать пользователя",
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();

    res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message: "Не удалось получить посты",
    });
  }
};

export const getOnePost = async (req, res) => {
  try {
    const postsId = req.params.id;

    const speciality = await PostModel.findById(postsId);

    res.status(200).json(speciality);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить пост",
    });
  }
};
