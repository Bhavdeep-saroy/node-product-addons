import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true
    },
    price: {
        type: String,
        default:null
    },
    image: {
        type: String,
        default:null
    },
    haveAddon: {
        type: Boolean,
        default:false
    }

},{timestamps:true});

const products = mongoose.model("products", productSchema);

export default products;

