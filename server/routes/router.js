import express from 'express';
import { downloadImage, uploadImage } from '../controller/image_controller.js';
import upload from '../utilities/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file'), uploadImage);

// getting api for downloading the image 
router.get('/file/:fileId', downloadImage);

export default router;