import express from "express";
import { getAnswers } from "./AnswerFunctions.js";
import db from "./db.js";
import { getLoggedInUser } from "./UserFunctions.js";

const AnswerRoutes = express.Router();

AnswerRoutes.post('/answers', ((req, res) => {
    const {content,postId} = req.body;
    getLoggedInUser(req.cookies.token).then(user => {
      db('posts').insert({
        title:null,
        content,
        parent_id:postId,
        author_id:user.id,
      }).then((answers) => {
            getAnswers([postId]).then(answers => res.json(answers).send())
      }).catch(console.log);
    });
  
  }));

export default AnswerRoutes;