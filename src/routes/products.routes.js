import { Router } from "express";
import { upload } from "../middleware/multer.js";
const routes = Router();
import { addProduct, addOnMenu, productList } from "../controller/product.controller.js";
import {productAddValidate, addOnMenusValidate} from "../validation/joiFuction.js";


  routes.route("/add-product").post(
    upload.single('image'), 
    productAddValidate, 
    addProduct
  );

  routes.route("/add-on-menus").post(addOnMenusValidate, addOnMenu);

  routes.route("/product-list").get(productList);

export default routes;
