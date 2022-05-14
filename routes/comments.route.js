const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comment/news/:id", commentsController.postComment);
router.delete("/comment/:id", commentsController.deleteComment);
router.patch("/comment/:id", commentsController.patchComment);
router.get("/comments", commentsController.showComments);
router.get("/comment/:id", commentsController.showCommentById);
router.get("/comments/news/:id", commentsController.showCommentsByNews);

module.exports = router;