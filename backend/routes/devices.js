import express from 'express';
import {getAllDevices,addDevice,getDevice,updateDevice,deleteDevice} from '../controllers/device.js';
import {authenticatetoken} from '../middlewares/authMiddleware.js';
const router = express.Router()
router.get('/',getAllDevices)
router.get('/:id',getDevice)
router.put('/:id',authenticatetoken,updateDevice)
router.post('/',authenticatetoken,addDevice)
router.delete('/:id',authenticatetoken,deleteDevice)
export default router;