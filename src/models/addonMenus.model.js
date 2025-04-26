import mongoose from "mongoose";


const addonMenusSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Products",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: String,
        default: null
    }
}, { timestamps: true });

const addonmenus = mongoose.model("addonmenus", addonMenusSchema);

export default addonmenus;
