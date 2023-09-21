const mdb = require("../models/mongodb");
const Product = mdb.products;

// Create and Save a new Product
createProduct = (req, res) => {
  // Create a Product
  const product = new Product(req.body);

  // Save Product in the database
  product
    .save(product)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || "Hay algun problema al crear el producto.",
      });
    });
};

// Create and Save a new Product
createAllProduct = (req, res) => {
    const products = req.body.products

    // console.log(products);
    products.forEach(prod => {
        const product = new Product(prod);
        product.save(product)
    });
    res.json("vale")

};


// Read Products

readProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error("Error al obtener los productos: ", err);
    res.json({ error: "Error al obtener los productos" });
  }
};

// Read ProductID

readProductID = async (req, res) => {
  const slug = req.body.id;
  try {
    const productId = await Product.findOne({ slug });
    res.json(productId);
  } catch (err) {
    console.error("Error al obtener el producto: ", err);
    res.json({ error: "Error al obtener el producto" });
  }
};

//delete Product

deleteProduct = async (req, res) => {
  const slug = req.body.id;

  try {
    const deleteProduct = await Product.findOne({ slug });

    await deleteProduct.deleteOne();
    res.json("El producto se ha eliminado");
  } catch (err) {
    console.error("Error al eliminar el producto: ", err);
    res.json({ error: "Error al eliminar el producto" });
  }
};
//delete ProductAll

deleteProductAll = async (req, res) => {
  try {
    await Product.deleteMany().then((data) => {
      res.json("Se han eliminado correctamente");
    });
  } catch (err) {
    console.error("Error al eliminar los productos: ", err);
    res.json({ error: "Error al eliminar los productos" });
  }
};
//actualizar Product

updateProduct = async (req, res) => {
  const slug = req.body.id;

  const new_product = req.body;

  try {
    const product = await Product.findOne({ slug });

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado." });
    }

    if (new_product.title) {
      product.title = new_product.title;
    }
    if (new_product.description) {
      product.description = new_product.description;
    }
    if (new_product.price) {
      product.price = new_product.price;
    }
    if (new_product.imgs) {
      product.imgs = new_product.imgs;
    }

    await product.save();
    res.json("Producto modificado");
  } catch (err) {
    console.error("Error al actualizar el producto: ", err);
    res.json({ error: "Error al actualizar el producto" });
  }
};
const productController = {
    createProduct,
    readProducts,
    readProductID,
    deleteProduct,
    updateProduct,
    deleteProductAll,
    createAllProduct
}
module.exports = productController;
