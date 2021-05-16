import {validationResult} from 'express-validator';

export const validate = (req,res,next) =>{
    const errors = validationResult(req)
    const userErrors = []
    if(errors.isEmpty()){
        return next()
    }
    else{
        errors.array().map(error => userErrors.push({ [error.param] : error.msg}))
        return res.status(422).json({errors:userErrors})
    }
}