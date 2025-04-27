import Joi from "joi";

const addProductSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  
    addItems: Joi.array()
      .items(
        Joi.object({
          title: Joi.string().required(),
          price: Joi.number().required(),
        }).unknown(true)
      )
      .required(),
  
    image: Joi.object({
      originalname: Joi.string().required(),
      mimetype: Joi.string()
        .valid('image/jpeg', 'image/png', 'image/jpg', 'image/webp')
        .required(),
      size: Joi.number().max(2 * 1024 * 1024).required(),
    })
      .unknown(true)
      .required(),
  }).unknown(true);
  


const addOnMenusSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    productId: Joi.string().required()
})
.unknown(true);

export { addProductSchema, addOnMenusSchema };
