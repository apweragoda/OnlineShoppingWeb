const orderItemDb = require('../../../../data-access/orderItemDb');
const orderItemSchema = require('../../../../validation/schema/orderItem');
const createValidation = require('../../../../validation')(orderItemSchema.createSchema);
const updateValidation = require('../../../../validation')(orderItemSchema.updateSchema);
const filterValidation = require('../../../../validation')(orderItemSchema.filterValidationSchema);
const orderItemController = require('./orderItem');

// use-cases imports with dependency injection
const addOrderItemUsecase = require('../../../../use-case/orderItem/addOrderItem')({
  orderItemDb,
  createValidation 
});
const findAllOrderItemUsecase = require('../../../../use-case/orderItem/findAllOrderItem')({
  orderItemDb,
  filterValidation
});
const getOrderItemCountUsecase = require('../../../../use-case/orderItem/getOrderItemCount')({
  orderItemDb,
  filterValidation
});
const softDeleteManyOrderItemUsecase = require('../../../../use-case/orderItem/softDeleteManyOrderItem')({ orderItemDb });
const bulkInsertOrderItemUsecase = require('../../../../use-case/orderItem/bulkInsertOrderItem')({ orderItemDb });
const bulkUpdateOrderItemUsecase = require('../../../../use-case/orderItem/bulkUpdateOrderItem')({ orderItemDb });
const deleteManyOrderItemUsecase = require('../../../../use-case/orderItem/deleteManyOrderItem')({ orderItemDb });
const softDeleteOrderItemUsecase = require('../../../../use-case/orderItem/softDeleteOrderItem')({ orderItemDb });
const partialUpdateOrderItemUsecase = require('../../../../use-case/orderItem/partialUpdateOrderItem')({
  orderItemDb,
  updateValidation
});
const updateOrderItemUsecase = require('../../../../use-case/orderItem/updateOrderItem')({
  orderItemDb,
  updateValidation 
});
const getOrderItemUsecase = require('../../../../use-case/orderItem/getOrderItem')({
  orderItemDb,
  filterValidation
});
const deleteOrderItemUsecase = require('../../../../use-case/orderItem/deleteOrderItem')({ orderItemDb });

// controller methods mapping
const addOrderItem = orderItemController.addOrderItem(addOrderItemUsecase);
const findAllOrderItem = orderItemController.findAllOrderItem(findAllOrderItemUsecase);
const getOrderItemCount = orderItemController.getOrderItemCount(getOrderItemCountUsecase);
const softDeleteManyOrderItem = orderItemController.softDeleteManyOrderItem(softDeleteManyOrderItemUsecase);
const bulkInsertOrderItem = orderItemController.bulkInsertOrderItem(bulkInsertOrderItemUsecase);
const bulkUpdateOrderItem = orderItemController.bulkUpdateOrderItem(bulkUpdateOrderItemUsecase);
const deleteManyOrderItem = orderItemController.deleteManyOrderItem(deleteManyOrderItemUsecase);
const softDeleteOrderItem = orderItemController.softDeleteOrderItem(softDeleteOrderItemUsecase);
const partialUpdateOrderItem = orderItemController.partialUpdateOrderItem(partialUpdateOrderItemUsecase);
const updateOrderItem = orderItemController.updateOrderItem(updateOrderItemUsecase);
const getOrderItemById = orderItemController.getOrderItem(getOrderItemUsecase);
const deleteOrderItem = orderItemController.deleteOrderItem(deleteOrderItemUsecase);

module.exports = {
  addOrderItem,
  findAllOrderItem,
  getOrderItemCount,
  softDeleteManyOrderItem,
  bulkInsertOrderItem,
  bulkUpdateOrderItem,
  deleteManyOrderItem,
  softDeleteOrderItem,
  partialUpdateOrderItem,
  updateOrderItem,
  getOrderItemById,
  deleteOrderItem,
};