const controller = require("../controller/logic/product.controller");

module.exports = (app) => {
    app.get("/product", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/product/getByName/:name", (req, res, next) => {
        controller.getByName(req, res, next);
    });

    app.post("/product", (req, res, next) => {
        controller.createProduct(req, res, next);
    });

    app.put("/product", (req, res, next) => {
        controller.UpdateProduct(req, res, next);
    });

    app.delete("/product", (req, res, next) => {
        controller.deleteProduct(req, res, next);
    });
};

