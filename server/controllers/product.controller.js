const mdb = require("../models/mongodb");
const Product = mdb.products;

// Create and Save a new Product
createProduct = (req, res) => {
  
  // Create a Product
  const product = new Product(req.body);

  // Save Product in the database
  product
    .save(product)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Hay algun problema al crear el producto."
      });
    });
};

    // Read Products

    readProducts = async (req, res)  => {
        try{
            const products = await Product.find();
            res.json(products)
        } catch (err) {
            console.error ("Error al obtener los productos: ", err);
            res.json({error: "Error al obtener los productos"})
        }
    }

    // Read ProductID

    readProductID = async (req,res) => {
        const {id} = req.body;
        try{
            const productId = await Product.findById(id)
            res.json(productId)

        } catch(err){
            console.error("Error al obtener el producto: ", err);
            res.json({error: "Error al obtener el producto"})
        }
    }

    //delete Product

    deleteProduct = async (req,res) => {
        const {id} = req.body;
       
        try{
            const deleteProduct = await Product.findById(id)
            await deleteProduct.deleteOne()
            res.send("El producto se ha eliminado")
            
        } catch(err){
            console.error("Error al eliminar el producto: ", err);
            res.json({error: "Error al eliminar el producto"})
        }
    }
     //delete ProductAll

     deleteProductAll = async (req,res) => {
        
       
        try{
         await Product.deleteMany()
         .then(data => {
            res.send("Se han eliminado correctamente")
         })
            
        } catch(err){
            console.error("Error al eliminar los productos: ", err);
            res.json({error: "Error al eliminar los productos"})
        }
    }
    //actualizar Product

    updateProduct = async (req,res) => {
        const {id} = req.body

        try{
            const product = await Product.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
            if(!product){
                return res.status(404).json({ message: 'Producto no encontrado.' });
            }
            
            await product.save()
            res.send("Producto modificado")
        }catch(err){
            console.error("Error al actualizar el producto: ", err);
            res.json({error: "Error al actualizar el producto"})
        }
    }
const productController = {
    createProduct,
    readProducts,
    readProductID,
    deleteProduct,
    updateProduct,
    deleteProductAll    
}
module.exports = productController;
