const orderDb = require('../../../data-access/orderDb');
const orderItemDb = require('../../../data-access/orderItemDb');
const shippingDb = require('../../../data-access/shippingDb');
const orderSchema = require('../../../validation/schema/order');
const createValidation = require('../../../validation')(orderSchema.createSchema);
const updateValidation = require('../../../validation')(orderSchema.updateSchema);
const filterValidation = require('../../../validation')(orderSchema.filterValidationSchema);
const orderController = require('./order');

// use-cases imports with dependency injection
const addOrderUsecase = require('../../../use-case/order/addOrder')({
  orderDb,
  createValidation 
});
const findAllOrderUsecase = require('../../../use-case/order/findAllOrder')({
  orderDb,
  filterValidation
});
const getOrderCountUsecase = require('../../../use-case/order/getOrderCount')({
  orderDb,
  filterValidation
});
const softDeleteManyOrderUsecase = require('../../../use-case/order/softDeleteManyOrder')({
  orderDb,
  orderItemDb,
  shippingDb
});
const bulkInsertOrderUsecase = require('../../../use-case/order/bulkInsertOrder')({ orderDb });
const bulkUpdateOrderUsecase = require('../../../use-case/order/bulkUpdateOrder')({ orderDb });
const deleteManyOrderUsecase = require('../../../use-case/order/deleteManyOrder')({
  orderDb,
  orderItemDb,
  shippingDb
});
const softDeleteOrderUsecase = require('../../../use-case/order/softDeleteOrder')({
  orderDb,
  orderItemDb,
  shippingDb
});
const partialUpdateOrderUsecase = require('../../../use-case/order/partialUpdateOrder')({
  orderDb,
  updateValidation
});
const updateOrderUsecase = require('../../../use-case/order/updateOrder')({
  orderDb,
  updateValidation 
});
const getOrderUsecase = require('../../../use-case/order/getOrder')({
  orderDb,
  filterValidation
});
const deleteOrderUsecase = require('../../../use-case/order/deleteOrder')({
  orderDb,
  orderItemDb,
  shippingDb
});

// controller methods mapping
const addOrder = orderController.addOrder(addOrderUsecase);
const findAllOrder = orderController.findAllOrder(findAllOrderUsecase);
const getOrderCount = orderController.getOrderCount(getOrderCountUsecase);
const softDeleteManyOrder = orderController.softDeleteManyOrder(softDeleteManyOrderUsecase);
const bulkInsertOrder = orderController.bulkInsertOrder(bulkInsertOrderUsecase);
const bulkUpdateOrder = orderController.bulkUpdateOrder(bulkUpdateOrderUsecase);
const deleteManyOrder = orderController.deleteManyOrder(deleteManyOrderUsecase);
const softDeleteOrder = orderController.softDeleteOrder(softDeleteOrderUsecase);
const partialUpdateOrder = orderController.partialUpdateOrder(partialUpdateOrderUsecase);
const updateOrder = orderController.updateOrder(updateOrderUsecase);
const getOrderById = orderController.getOrder(getOrderUsecase);
const deleteOrder = orderController.deleteOrder(deleteOrderUsecase);

module.exports = {
  addOrder,
  findAllOrder,
  getOrderCount,
  softDeleteManyOrder,
  bulkInsertOrder,
  bulkUpdateOrder,
  deleteManyOrder,
  softDeleteOrder,
  partialUpdateOrder,
  updateOrder,
  getOrderById,
  deleteOrder,
};