import express from 'express';
import { receiveRequest } from '../controllers/callback.js';
const router = express.Router();

router.post('/', receiveRequest);

export default router;