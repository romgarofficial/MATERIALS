const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipe");
const { verify,verifyAdmin } = require("../auth");

router.get("/all", verify, verifyAdmin, recipeController.getAll)
router.post("/", verify, verifyAdmin, recipeController.addRecipe)
router.get("/:recipeId", recipeController.getRecipe)
router.patch("/:recipeId", verify, verifyAdmin, recipeController.updateRecipe)
router.patch("/:recipeId/archive", verify, verifyAdmin, recipeController.archiveRecipe)
router.patch("/:recipeId/activate", verify, verifyAdmin, recipeController.activateRecipe)

module.exports = router;
