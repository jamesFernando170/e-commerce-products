/**Packages */
const mongoose = require("mongoose");

/**Schema creation */
const productSchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    price: {
        type: "Number",
        required: true
    },
    stock: {
        type: "Number",
        required: true
    },
    qualification: {
        type: "Number",
        required: true,
        min: 0,
        max: 5
    },
    category: {
        type: "String",
        required: true
    },
    discount: {
        type: "String",
        required: true
    }
});

/**Schema exportation */
module.exports = productSchema;

