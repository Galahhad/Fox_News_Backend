const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controller");

const router = Router();

router.post("/category", categoriesController.postCategory);
router.delete("/category/:id", categoriesController.deleteCategory);
router.patch("/category/:id", categoriesController.patchCategory);
router.get("/categories", categoriesController.showCategories);
router.get("/category/:id", categoriesController.showCategoryById);

module.exports = router;