// this is a middleware file

import multer from 'multer';

const upload = multer({ dest : 'upload'});

export default upload;
