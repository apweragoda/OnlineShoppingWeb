const cartItemDb = require('../../../../data-access/cartItemDb');
const cartItemSchema = require('../../../../validation/schema/cartItem');
const createValidation = require('../../../../validation')(cartItemSchema.createSchema);
const updateValidation = require('../../../../validation')(cartItemSchema.updateSchema);
const filterValidation = require('../../../../validation')(cartItemSchema.filterValidationSchema);
const cartItemController = require('./cartItem');

// use-cases imports with dependency injection
const addCartItemUsecase = require('../../../../use-case/cartItem/addCartItem')({
  cartItemDb,
  createValidation 
});
const findAllCartItemUsecase = require('../../../../use-case/cartItem/findAllCartItem')({
  cartItemDb,
  filterValidation
});
const getCartItemCountUsecase = require('../../../../use-case/cartItem/getCartItemCount')({
  cartItemDb,
  filterValidation
});
const softDeleteManyCartItemUsecase = require('../../../../use-case/cartItem/softDeleteManyCartItem')({ cartItemDb });
const bulkInsertCartItemUsecase = require('../../../../use-case/cartItem/bulkInsertCartItem')({ cartItemDb });
const bulkUpdateCartItemUsecase = require('../../../../use-case/cartItem/bulkUpdateCartItem')({ cartItemDb });
const deleteManyCartItemUsecase = require('../../../../use-case/cartItem/deleteManyCartItem')({ cartItemDb });
const softDeleteCartItemUsecase = require('../../../../use-case/cartItem/softDeleteCartItem')({ cartItemDb });
const partialUpdateCartItemUsecase = require('../../../../use-case/cartItem/partialUpdateCartItem')({
  cartItemDb,
  updateValidation
});
const updateCartItemUsecase = require('../../../../use-case/cartItem/updateCartItem')({
  cartItemDb,
  updateValidation 
});
const getCartItemUsecase = require('../../../../use-case/cartItem/getCartItem')({
  cartItemDb,
  filterValidation
});
const deleteCartItemUsecase = require('../../../../use-case/cartItem/deleteCartItem')({ cartItemDb });

// controller methods mapping
const addCartItem = cartItemController.addCartItem(addCartItemUsecase);
const findAllCartItem = cartItemController.findAllCartItem(findAllCartItemUsecase);
const getCartItemCount = cartItemController.getCartItemCount(getCartItemCountUsecase);
const softDeleteManyCartItem = cartItemController.softDeleteManyCartItem(softDeleteManyCartItemUsecase);
const bulkInsertCartItem = cartItemController.bulkInsertCartItem(bulkInsertCartItemUsecase);
const bulkUpdateCartItem = cartItemController.bulkUpdateCartItem(bulkUpdateCartItemUsecase);
const deleteManyCartItem = cartItemController.deleteManyCartItem(deleteManyCartItemUsecase);
const softDeleteCartItem = cartItemController.softDeleteCartItem(softDeleteCartItemUsecase);
const partialUpdateCartItem = cartItemController.partialUpdateCartItem(partialUpdateCartItemUsecase);
const updateCartItem = cartItemController.updateCartItem(updateCartItemUsecase);
const getCartItemById = cartItemController.getCartItem(getCartItemUsecase);
const deleteCartItem = cartItemController.deleteCartItem(deleteCartItemUsecase);

module.exports = {
  addCartItem,
  findAllCartItem,
  getCartItemCount,
  softDeleteManyCartItem,
  bulkInsertCartItem,
  bulkUpdateCartItem,
  deleteManyCartItem,
  softDeleteCartItem,
  partialUpdateCartItem,
  updateCartItem,
  getCartItemById,
  deleteCartItem,
};