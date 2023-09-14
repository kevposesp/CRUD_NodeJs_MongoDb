const {createProduct, readProducts,readProductID,deleteProduct,deleteProductAll, updateProduct} = require("../controllers/product.controller")


module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

app.get(
    "/products",
    readProducts,
    
)

app.post(
    "/product",
    readProductID
)

app.post(
    "/products",
    createProduct
)

app.delete(
    "/product",
    deleteProduct
)

app.delete(
    "/productAll",
    deleteProductAll
)

app.put(
    "/product",
    updateProduct
)
}