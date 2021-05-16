import {check} from 'express-validator';
import { Configurations } from '../config/config.js';

export const userValidationRules = () =>{
    return [
        check('fullname').not().isEmpty()
        .withMessage('Please provide your fullname')
        .matches(Configurations.alphabetsnspace).withMessage('Fullname must constist of only alphabets.'),
        check('email').isEmail().withMessage('Please provide a valid email address'),
        check('username','Please provide your username').not().isEmpty()
        .isAlphanumeric().withMessage('Username should consist of only alphanumeric characters.'),
        check('password','Please provide your password').not().isEmpty()
        .isLength({min:8}).withMessage('Password should consist of atleast 8 characters')
    ]
}