import express from 'express';
import {createUser,getAllUsers,getUser} from '../controllers/user.js';
import {userValidationRules} from '../validators/userValidator.js';
import {validate} from '../validators/validate.js';

const router = express.Router()
router.post('/',userValidationRules(),validate,createUser)
router.get('/',getAllUsers)
router.get('/:id',getUser)
export default router;