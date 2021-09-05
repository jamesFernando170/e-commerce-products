/**Dto*/
const productDto = require("../../model/dto/product.dto");
const config = require("config");

/**Helper */
const helper = require("../helpers/general.helper");
const notification = require("../helpers/notification.helper");

exports.createProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        qualification: req.body.qualification,
        category: req.body.category,
        discount: req.body.discount
    };
    productDto.create(product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        notification.sendSMS(product.phone);
        res.status(201).json(
            {
                info: data
            }
        );

    });
};

exports.UpdateProduct = (req, res, next) => {
    let product = {
        name: req.body.name,
        price: req.body.price,
        stock: req.body.stock,
        qualification: req.body.qualification,
        category: req.body.category,
        discount: req.body.discount
    };
    productDto.update({ _id: req.body.id }, product, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(201).json(
            {
                info: data
            }
        );
    });
};

exports.getAll = (req, res, next) => {
    productDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};

exports.getByName = (req, res, next) => {
    productDto.getByName({ name: req.params.name }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(200).json(
            {
                info: data
            }
        );
    });
};


exports.deleteProduct = (req, res, next) => {
    productDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        }
        res.status(204).json();
    });
}

