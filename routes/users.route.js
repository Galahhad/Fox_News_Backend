const { Router } = require("express");
const { userController } = require("../controllers/users.controller");

const router = Router();

router.post("/user", userController.postUser);
router.delete("/user/:id", userController.deleteUser);
router.patch("/user/:id", userController.patchUser);
router.get("/users", userController.showUsers);
router.get("/user/:id", userController.showUserById);

module.exports = router;