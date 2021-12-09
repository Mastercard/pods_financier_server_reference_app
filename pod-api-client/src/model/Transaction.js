/**
 * Pay On Demand for Digital Inclusion
 * Please visit https://developer.mastercard.com for additional details. ## Usage Notes - In the endpoints, you will see parameter examples in {{parameter}} format. You need to replace that with the actual value. This is usually applicable for identifier (ID). For example, on GET /contracts, you need to replace \"financier_id\" parameter with actual financier ID value. You can get this value either from querying using GET /financiers or creating a new financier using POST /financiers. The same applies for properties inside request body. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: PayonDemand_DigitalInclusion@mastercard.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.3.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/LineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.Transaction = factory(root.PodApiClient.ApiClient, root.PodApiClient.LineItem);
  }
}(this, function(ApiClient, LineItem) {
  'use strict';



  /**
   * The Transaction model module.
   * @module model/Transaction
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Transaction</code>.
   * @alias module:model/Transaction
   * @class
   * @param id {String} ID.
   * @param financierId {String} Financier ID that owns this transaction.
   * @param contractId {String} Contract ID that owns this transaction.
   * @param totalAmount {String} Total amount. Formatted according to ISO 4217 standard.
   * @param currency {String} Currency in ISO 4217 format.
   * @param transactionReference {String} External transaction reference. This number is unique per financier.
   * @param transactionDate {String} Date time when transaction is made.
   * @param source {String} Source of transaction.
   * @param transactionStatus {String} Status. It can be INIT, FAILED, PENDING, APPROVED.
   */
  var exports = function(id, financierId, contractId, totalAmount, currency, transactionReference, transactionDate, source, transactionStatus) {
    var _this = this;

    _this['id'] = id;
    _this['financierId'] = financierId;
    _this['contractId'] = contractId;
    _this['totalAmount'] = totalAmount;
    _this['currency'] = currency;
    _this['transactionReference'] = transactionReference;
    _this['transactionDate'] = transactionDate;
    _this['source'] = source;
    _this['transactionStatus'] = transactionStatus;
  };

  /**
   * Constructs a <code>Transaction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transaction} obj Optional instance to populate.
   * @return {module:model/Transaction} The populated <code>Transaction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('financierId')) {
        obj['financierId'] = ApiClient.convertToType(data['financierId'], 'String');
      }
      if (data.hasOwnProperty('contractId')) {
        obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
      }
      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('transactionReference')) {
        obj['transactionReference'] = ApiClient.convertToType(data['transactionReference'], 'String');
      }
      if (data.hasOwnProperty('transactionDate')) {
        obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('transactionStatus')) {
        obj['transactionStatus'] = ApiClient.convertToType(data['transactionStatus'], 'String');
      }
      if (data.hasOwnProperty('transactionType')) {
        obj['transactionType'] = ApiClient.convertToType(data['transactionType'], 'String');
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [LineItem]);
      }
    }
    return obj;
  }

  /**
   * ID.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Financier ID that owns this transaction.
   * @member {String} financierId
   */
  exports.prototype['financierId'] = undefined;
  /**
   * Contract ID that owns this transaction.
   * @member {String} contractId
   */
  exports.prototype['contractId'] = undefined;
  /**
   * Total amount. Formatted according to ISO 4217 standard.
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency in ISO 4217 format.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * External transaction reference. This number is unique per financier.
   * @member {String} transactionReference
   */
  exports.prototype['transactionReference'] = undefined;
  /**
   * Date time when transaction is made.
   * @member {String} transactionDate
   */
  exports.prototype['transactionDate'] = undefined;
  /**
   * Source of transaction.
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * Status. It can be INIT, FAILED, PENDING, APPROVED.
   * @member {String} transactionStatus
   */
  exports.prototype['transactionStatus'] = undefined;
  /**
   * Type. It can be EXTERNAL or INTERNAL.
   * @member {String} transactionType
   */
  exports.prototype['transactionType'] = undefined;
  /**
   * @member {Array.<module:model/LineItem>} lineItems
   */
  exports.prototype['lineItems'] = undefined;



  return exports;
}));


