const Product = require("../models/product.model");

const createProduct = async (req, res, next) => {
  try {
    //create / save
    const product = new Product(req.body);
    const result = await product.save();

    res.status(200).send({
      message: "Data post successfuly",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Error form post product",
      error: error.message,
    });
  }
};

//get all product
const getProduct = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      status: "success",
      result: products,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Error form get product",
      error: error.message,
    });
  }
};
//get single product
const getSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    res.json({
      status: "success",
      result: singleProduct,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Error form get product",
      error: error.message,
    });
  }
};

//delete product
const deleteSingleProduct = async (req, res, next) => {
  try {
    const singleProduct = await Product.deleteOne({ _id: req.params.id });
    res.json({
      status: "success",
      result: singleProduct,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Error form get product",
      error: error.message,
    });
  }
};

//update product
const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true }
    );
    res.status(200).json({
      status: "success",
      result: updatedProduct,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Can't update product",
      error: error.message,
    });
  }
};
//bulk update product
const bulkUpdateProduct = async (req, res, next) => {
  try {
    const products = [];

    req.body.ids.forEach((product) => {
      products.push(
        Product.updateOne(
          { _id: product.id },
          { $set: product.data },
          { runValidators: true }
        )
      );
    });

    const result = await Promise.all(products);

    res.status(200).json({
      status: "success",
      result: result,
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      message: "Can't update product",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProduct,
  updateProduct,
  getSingleProduct,
  deleteSingleProduct,
  bulkUpdateProduct,
};
