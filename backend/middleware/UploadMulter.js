const multer = require('multer');
const { extname } = require('path');

const MIMETYPES = ['image/jpeg', 'image/jpg', 'image/png'];

const UploadImage = multer({
  storage: multer.memoryStorage(), // Cambiar a almacenamiento en memoria
  fileFilter: (req, file, cb) => {
    if (MIMETYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Tipo de archivo no permitido'), false);
    }
  },
  limits: {
    fieldSize: 10000000
  }
});

module.exports = { UploadImage };
