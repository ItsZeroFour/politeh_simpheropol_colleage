import { validationResult } from "express-validator";
import PostModel from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { image, title, text, subtitle } = req.body;

    const post = new PostModel({ image, title, text, subtitle });

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
    const postId = req.params.id;

    PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: "after",
      }
    )
      .then((doc) => res.status(200).json(doc))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Не удалось получить пост",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось получить пост",
    });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;

    PostModel.findOneAndDelete({ _id: postId })
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            message: "Пост не найден",
          });
        }

        res.status(200).json({
          message: "Пост удален успешно!",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Не удалось удалить пост",
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось удалить пост",
    });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        image: req.body.image,
        title: req.body.title,
        text: req.body.text,
        subtitle: req.body.subtitle,
      }
    );

    res.status(200).json({
      message: "Пост обновлен успешно!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось обновить пост",
    });
  }
};
