/**Packages */
const mongoose = require("mongoose");
const db = require("../db-connection/mongodb");

//Aqui se realizaran los metodos que crean, editan, eliminan ...

/**Using schemas */
const schema = require("../schemas/product.schema");
db();

schema.statics = {
    create: function(data, cb){
        console.log(data.category);
        let doc = new this(data);
        doc.save(cb);        
    },
    getAll: function(query, cb){
        this.find(query, cb);    
    },
    getByName: function(query, cb){
        this.find(query, cb);        
    },
    update: function(query, data, cb){
        this.findOneAndUpdate(query, {$set: data}, {new: true}, cb);
    },
    delete: function(query, cb){
        this.findOneAndDelete(query, cb);   
    }
};

const dto = mongoose.model("coll_product", schema);
module.exports = dto;