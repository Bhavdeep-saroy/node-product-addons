import products from "../models/products.model.js";
import addonmenus from "../models/addonMenus.model.js";
import dotenv from "dotenv"
dotenv.config();


const addProduct = async (req, res) => {
    try {
        // Destructure validated product fields from request
        const { image, title, description, price, haveAddon, addonMenu } = req.productAddValidate;
        
        // Generate the image URL based on server path
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${image.filename}`;

        // Create and save new product in the database
        const productStore = await products.create({
            title,
            description,
            price,
            image: imageUrl,
        });

        // Send success response with inserted product data
        return res.status(200).json({
            message: "Data inserted successfully",
            product: productStore,
        });

    } catch (error) {
        // Handle any error during product insertion
        console.error("Error inserting product:", error);
        return res.status(500).json({
            message: "Something went wrong while adding product",
            error: error.message,
        });
    }
};


  
  
const addOnMenu = async (req, res) => {
    try {
        // Get validated fields from the request
        const { productId, title, description, price } = req.addOnMenusValidate;
  
        // Find the product by ID
        const product = await products.findById(productId);
        if (!product) {
            // If product not found, send 404 response
            return res.status(404).json({
                errorMessage: "Product not found with the given ID.",
            });
        }
  
        // Mark product as having add-ons
        product.haveAddon = true;
        await product.save();
  
        // Create and save the new add-on menu linked to the product
        const addonMenu = await addonmenus.create({
            productId,
            title,
            description,
            price,
        });
  
        // Send success response with the created add-on menu
        return res.status(201).json({
            message: "Add-on menu added successfully.",
            addonMenu,
        });
  
    } catch (error) {
        // Handle any errors during the process
        console.error("Error adding add-on menu:", error);
        return res.status(500).json({
            message: "Something went wrong while adding the add-on menu.",
            error: error.message,
        });
    }
};

   


const productList = async (req, res) => {
    // Get page number and limit from query params, set default if not given
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skip = (page - 1) * limit;
  
    try {
        // Fetch products with their related add-on menus
        const productsList = await products.aggregate([
            {
                $lookup: {
                    from: "addonmenus",    // collection to join
                    localField: "_id",     // field from products
                    foreignField: "productId", // field from addonmenus
                    as: "addonMenu",        // output array field
                },
            },
            { $sort: { createdAt: -1 } },  // sort products by latest first
            { $skip: skip },               // skip products for pagination
            { $limit: limit },             // limit products for pagination
        ]);
  
        // Get total number of products
        const totalProducts = await products.countDocuments();
        // Calculate total pages
        const totalPages = Math.ceil(totalProducts / limit);
  
        // Send success response with product data and pagination info
        res.json({
            status: true,
            currentPage: page,
            totalPages: totalPages,
            totalProducts: totalProducts,
            data: productsList,
        });
  
    } catch (error) {
        // Handle error and send failure response
        console.error("Error in productList:", error);
        return res.status(400).json({
            status: false,
            errorMessage: "Product list get API me kuch gadbad ho gayi",
            mainError: error.message,
        });
    }
};

  
  

export {addProduct, addOnMenu, productList}