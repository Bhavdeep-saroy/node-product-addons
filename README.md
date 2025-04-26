📄 Project Details - Products and Addons Management (Node.js Backend)
This project is created using Node.js and Express.js for building a backend API to manage products and their addons. No frontend and no Laravel framework is used in this project. The project is based on an assignment where a user can add products and also add multiple addons related to each product. Products and Addons are saved into MySQL database with proper foreign key relationships. Pagination and sorting of products are handled manually using limit and offset in MySQL queries.

There are three main APIs available in this project. The first API is the product list API which shows the list of all products with pagination and sorting. You can access this API at: http://127.0.0.1:5004/api/v1/products/product-list?page=1&limit=2. Here you can change the page and limit query parameters to get different results. The second API is for adding a new addon menu related to any product. You can add addons by calling this API: http://127.0.0.1:5004/api/v1/products/add-on-menus by passing the product ID, addon title, and addon price. The third API is used to add a new product with its details like title, description, price, image upload, and whether it has addons or not. The API URL for adding a product is: http://127.0.0.1:5004/api/v1/products/add-product.

The database has two tables named products and addon_menus. The products table contains fields like id, title, description, price, image, have_addon, created_date, and modified_date. The addon_menus table contains id, product_id (foreign key), title, price, created_date, and modified_date. Both tables use InnoDB storage engine with proper indexing and foreign key setup for better performance.

The code follows clean coding practices using 4-space tab indentation. Bootstrap is suggested for frontend styling (if anyone wants to build frontend), and no inline CSS or inline JavaScript is used as per given assignment instructions. JavaScript files should be included at the bottom of the body if frontend is built later.

This backend project covers all assignment requirements with Node.js and MySQL 8.0 and is ready for further integration if needed.

✅ Quick API Summary:
Product List: http://127.0.0.1:5004/api/v1/products/product-list?page=1&limit=2

Add On Menus: http://127.0.0.1:5004/api/v1/products/add-on-menus

Add Product: http://127.0.0.1:5004/api/v1/products/add-product
