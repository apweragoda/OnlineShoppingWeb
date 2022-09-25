const addressDb = require('../../../../data-access/addressDb');
const addressSchema = require('../../../../validation/schema/address');
const createValidation = require('../../../../validation')(addressSchema.createSchema);
const updateValidation = require('../../../../validation')(addressSchema.updateSchema);
const filterValidation = require('../../../../validation')(addressSchema.filterValidationSchema);
const addressController = require('./address');

// use-cases imports with dependency injection
const addAddressUsecase = require('../../../../use-case/address/addAddress')({
  addressDb,
  createValidation 
});
const findAllAddressUsecase = require('../../../../use-case/address/findAllAddress')({
  addressDb,
  filterValidation
});
const getAddressCountUsecase = require('../../../../use-case/address/getAddressCount')({
  addressDb,
  filterValidation
});
const softDeleteManyAddressUsecase = require('../../../../use-case/address/softDeleteManyAddress')({ addressDb });
const bulkInsertAddressUsecase = require('../../../../use-case/address/bulkInsertAddress')({ addressDb });
const bulkUpdateAddressUsecase = require('../../../../use-case/address/bulkUpdateAddress')({ addressDb });
const deleteManyAddressUsecase = require('../../../../use-case/address/deleteManyAddress')({ addressDb });
const softDeleteAddressUsecase = require('../../../../use-case/address/softDeleteAddress')({ addressDb });
const partialUpdateAddressUsecase = require('../../../../use-case/address/partialUpdateAddress')({
  addressDb,
  updateValidation
});
const updateAddressUsecase = require('../../../../use-case/address/updateAddress')({
  addressDb,
  updateValidation 
});
const getAddressUsecase = require('../../../../use-case/address/getAddress')({
  addressDb,
  filterValidation
});
const deleteAddressUsecase = require('../../../../use-case/address/deleteAddress')({ addressDb });

// controller methods mapping
const addAddress = addressController.addAddress(addAddressUsecase);
const findAllAddress = addressController.findAllAddress(findAllAddressUsecase);
const getAddressCount = addressController.getAddressCount(getAddressCountUsecase);
const softDeleteManyAddress = addressController.softDeleteManyAddress(softDeleteManyAddressUsecase);
const bulkInsertAddress = addressController.bulkInsertAddress(bulkInsertAddressUsecase);
const bulkUpdateAddress = addressController.bulkUpdateAddress(bulkUpdateAddressUsecase);
const deleteManyAddress = addressController.deleteManyAddress(deleteManyAddressUsecase);
const softDeleteAddress = addressController.softDeleteAddress(softDeleteAddressUsecase);
const partialUpdateAddress = addressController.partialUpdateAddress(partialUpdateAddressUsecase);
const updateAddress = addressController.updateAddress(updateAddressUsecase);
const getAddressById = addressController.getAddress(getAddressUsecase);
const deleteAddress = addressController.deleteAddress(deleteAddressUsecase);

module.exports = {
  addAddress,
  findAllAddress,
  getAddressCount,
  softDeleteManyAddress,
  bulkInsertAddress,
  bulkUpdateAddress,
  deleteManyAddress,
  softDeleteAddress,
  partialUpdateAddress,
  updateAddress,
  getAddressById,
  deleteAddress,
};