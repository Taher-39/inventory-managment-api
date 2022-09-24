const express = require("express");
const productController = require("../controller/product.controller");

const router = express.Router();

router
  .route("/")
  .post(productController.createProduct)
  .get(productController.getProduct);

router
  .route("/")
  .patch(productController.bulkUpdateProduct)

router
  .route("/:id")
  .get(productController.getSingleProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteSingleProduct);

module.exports = router;
