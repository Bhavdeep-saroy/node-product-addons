 # 📄 Project Details - Products and Addons Management (Node.js + MongoDB Backend)
This project is built using Node.js and MongoDB (with Mongoose) as the database.
It is a simple backend application where you can add products and add addons (also called admissions).

## 📦 Inside This Application:
You can add products with fields like title, description, price, and image.

Products can also have multiple addons associated with them.

Each addon has its own title and price.

Apart from adding, you can also list all products along with their addons.

 ## 🧩 Project Modules:
1. Add Product Module:
Add a new product along with optional addons.

2. List Product Module:
List all products with pagination support.

## ⚙️ Backend Only:
# All APIs are built using Node.js backend only.

No frontend, no external frameworks other than necessary backend libraries.

#🚀 Available APIs:
#📋 Product List API
Purpose: List all products with pagination.

URL:

bash
Copy
Edit
# GET http://127.0.0.1:5004/api/v1/products/product-list?page=1&limit=2
Query Parameters:

page (Optional): Page number (default is 1)

limit (Optional): Number of items per page (default is 10)

 ## 📋 Add Product API
Purpose: Add a new product along with its addons.

URL:

bash
Copy
Edit
# POST http://127.0.0.1:5004/api/v1/products/add-product
Body Parameters:

title (string): Product title

description (string): Product description

price (number): Product price

image (file): Product image (file upload)

haveAddon (boolean): Whether product has addons (true/false)

addons (array - optional): Each addon with title and price

## 🛠️ Technologies Used:
Node.js

Express.js

MongoDB (using Mongoose ODM)

Multer (for file uploads)

Joi (for request validation)

Nodemon (for development server)
