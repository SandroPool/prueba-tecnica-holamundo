import { Router } from 'express';
import { saveAddress, getAllAddress } from '../controllers/maps.controller.js';

const router = Router();

router.post('/address', saveAddress);
router.get('/address', getAllAddress);

export default router;
