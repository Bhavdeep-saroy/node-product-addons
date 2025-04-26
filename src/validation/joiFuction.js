import {addProductSchema, addOnMenusSchema} from "./index.js"


const productAddValidate = (req, res, next) => {
    //console.log("-0=-0=9-8878tyhgjhjaxhsajajaSIUADWIYEDIQWYEYQW",req.body)
    req.body.image =req.file ? req.file : null;


    const { error, value } = addProductSchema.validate(req.body, { abortEarly: false });
    //console.log("Validated Body ===> ", req.body);

    if (error) {
        const errorMessages = error.details.map(detail => detail.message);
        return res.status(400).json({message:"someThing went wrong", error: errorMessages });
    }

    req.productAddValidate = value;
    next();
}

const addOnMenusValidate = (req, res, next) => {

    const { error, value } = addOnMenusSchema.validate(req.body, { abortEarly: false });
    //console.log("Validated Body ===> ", req.body);

    if (error) {
        const errorMessages = error.details.map(detail => detail.message);
        return res.status(400).json({message:"someThing went wrong", error: errorMessages });
    }
    req.addOnMenusValidate = value;
    next();
}

export {productAddValidate, addOnMenusValidate}