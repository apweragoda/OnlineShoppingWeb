const imageDb = require('../../../data-access/imageDb');
const imageSchema = require('../../../validation/schema/image');
const createValidation = require('../../../validation')(imageSchema.createSchema);
const updateValidation = require('../../../validation')(imageSchema.updateSchema);
const filterValidation = require('../../../validation')(imageSchema.filterValidationSchema);
const imageController = require('./image');

// use-cases imports with dependency injection
const addImageUsecase = require('../../../use-case/image/addImage')({
  imageDb,
  createValidation 
});
const findAllImageUsecase = require('../../../use-case/image/findAllImage')({
  imageDb,
  filterValidation
});
const getImageCountUsecase = require('../../../use-case/image/getImageCount')({
  imageDb,
  filterValidation
});
const softDeleteManyImageUsecase = require('../../../use-case/image/softDeleteManyImage')({ imageDb });
const bulkInsertImageUsecase = require('../../../use-case/image/bulkInsertImage')({ imageDb });
const bulkUpdateImageUsecase = require('../../../use-case/image/bulkUpdateImage')({ imageDb });
const deleteManyImageUsecase = require('../../../use-case/image/deleteManyImage')({ imageDb });
const softDeleteImageUsecase = require('../../../use-case/image/softDeleteImage')({ imageDb });
const partialUpdateImageUsecase = require('../../../use-case/image/partialUpdateImage')({
  imageDb,
  updateValidation
});
const updateImageUsecase = require('../../../use-case/image/updateImage')({
  imageDb,
  updateValidation 
});
const getImageUsecase = require('../../../use-case/image/getImage')({
  imageDb,
  filterValidation
});
const deleteImageUsecase = require('../../../use-case/image/deleteImage')({ imageDb });

// controller methods mapping
const addImage = imageController.addImage(addImageUsecase);
const findAllImage = imageController.findAllImage(findAllImageUsecase);
const getImageCount = imageController.getImageCount(getImageCountUsecase);
const softDeleteManyImage = imageController.softDeleteManyImage(softDeleteManyImageUsecase);
const bulkInsertImage = imageController.bulkInsertImage(bulkInsertImageUsecase);
const bulkUpdateImage = imageController.bulkUpdateImage(bulkUpdateImageUsecase);
const deleteManyImage = imageController.deleteManyImage(deleteManyImageUsecase);
const softDeleteImage = imageController.softDeleteImage(softDeleteImageUsecase);
const partialUpdateImage = imageController.partialUpdateImage(partialUpdateImageUsecase);
const updateImage = imageController.updateImage(updateImageUsecase);
const getImageById = imageController.getImage(getImageUsecase);
const deleteImage = imageController.deleteImage(deleteImageUsecase);

module.exports = {
  addImage,
  findAllImage,
  getImageCount,
  softDeleteManyImage,
  bulkInsertImage,
  bulkUpdateImage,
  deleteManyImage,
  softDeleteImage,
  partialUpdateImage,
  updateImage,
  getImageById,
  deleteImage,
};