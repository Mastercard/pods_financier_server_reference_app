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
    define(['ApiClient', 'model/ContractDeviceCreateRequest', 'model/InstalmentContractDetail'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContractDeviceCreateRequest'), require('./InstalmentContractDetail'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.ContractCreateRequest = factory(root.PodApiClient.ApiClient, root.PodApiClient.ContractDeviceCreateRequest, root.PodApiClient.InstalmentContractDetail);
  }
}(this, function(ApiClient, ContractDeviceCreateRequest, InstalmentContractDetail) {
  'use strict';



  /**
   * The ContractCreateRequest model module.
   * @module model/ContractCreateRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContractCreateRequest</code>.
   * @alias module:model/ContractCreateRequest
   * @class
   * @param amount {Number} Total payment amount. Formatted according to ISO 4217 standard.
   * @param currency {String} Currency in ISO 4217 format.
   * @param downpaymentAmount {Number} Amount of downpayment. Formatted according to ISO 4217 standard.
   * @param duration {Number} Length of contract duration based on duration unit chosen. Minimum value is 1.
   * @param durationUnit {String} Time unit for length of contract. It can be DAY, WEEK or MONTH.
   * @param financierId {String} Financier ID that owns this contract.
   * @param type {String} Type of contract. Determine how payment is done. It can be CREDIT or INSTALMENT.
   */
  var exports = function(amount, currency, downpaymentAmount, duration, durationUnit, financierId, type) {
    var _this = this;

    _this['amount'] = amount;
    _this['currency'] = currency;
    _this['downpaymentAmount'] = downpaymentAmount;
    _this['duration'] = duration;
    _this['durationUnit'] = durationUnit;
    _this['financierId'] = financierId;
    _this['type'] = type;
  };

  /**
   * Constructs a <code>ContractCreateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContractCreateRequest} obj Optional instance to populate.
   * @return {module:model/ContractCreateRequest} The populated <code>ContractCreateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('defaultPaymentMethodId')) {
        obj['defaultPaymentMethodId'] = ApiClient.convertToType(data['defaultPaymentMethodId'], 'String');
      }
      if (data.hasOwnProperty('device')) {
        obj['device'] = ContractDeviceCreateRequest.constructFromObject(data['device']);
      }
      if (data.hasOwnProperty('downpaymentAmount')) {
        obj['downpaymentAmount'] = ApiClient.convertToType(data['downpaymentAmount'], 'Number');
      }
      if (data.hasOwnProperty('downpaymentTransactionId')) {
        obj['downpaymentTransactionId'] = ApiClient.convertToType(data['downpaymentTransactionId'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Number');
      }
      if (data.hasOwnProperty('durationUnit')) {
        obj['durationUnit'] = ApiClient.convertToType(data['durationUnit'], 'String');
      }
      if (data.hasOwnProperty('financierId')) {
        obj['financierId'] = ApiClient.convertToType(data['financierId'], 'String');
      }
      if (data.hasOwnProperty('gracePeriod')) {
        obj['gracePeriod'] = ApiClient.convertToType(data['gracePeriod'], 'Number');
      }
      if (data.hasOwnProperty('gracePeriodUnit')) {
        obj['gracePeriodUnit'] = ApiClient.convertToType(data['gracePeriodUnit'], 'String');
      }
      if (data.hasOwnProperty('instalmentContractDetails')) {
        obj['instalmentContractDetails'] = InstalmentContractDetail.constructFromObject(data['instalmentContractDetails']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * Total payment amount. Formatted according to ISO 4217 standard.
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * Currency in ISO 4217 format.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * Default payment method for this contract.
   * @member {String} defaultPaymentMethodId
   */
  exports.prototype['defaultPaymentMethodId'] = undefined;
  /**
   * @member {module:model/ContractDeviceCreateRequest} device
   */
  exports.prototype['device'] = undefined;
  /**
   * Amount of downpayment. Formatted according to ISO 4217 standard.
   * @member {Number} downpaymentAmount
   */
  exports.prototype['downpaymentAmount'] = undefined;
  /**
   * id of downpayment transaction.
   * @member {String} downpaymentTransactionId
   */
  exports.prototype['downpaymentTransactionId'] = undefined;
  /**
   * Length of contract duration based on duration unit chosen. Minimum value is 1.
   * @member {Number} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * Time unit for length of contract. It can be DAY, WEEK or MONTH.
   * @member {String} durationUnit
   */
  exports.prototype['durationUnit'] = undefined;
  /**
   * Financier ID that owns this contract.
   * @member {String} financierId
   */
  exports.prototype['financierId'] = undefined;
  /**
   * Grace period after payment due date before locking device.
   * @member {Number} gracePeriod
   * @default 0
   */
  exports.prototype['gracePeriod'] = 0;
  /**
   * Grace period unit after payment due date before locking device. It can be HOUR, DAY, WEEK or MONTH.
   * @member {String} gracePeriodUnit
   * @default 'HOUR'
   */
  exports.prototype['gracePeriodUnit'] = 'HOUR';
  /**
   * @member {module:model/InstalmentContractDetail} instalmentContractDetails
   */
  exports.prototype['instalmentContractDetails'] = undefined;
  /**
   * Type of contract. Determine how payment is done. It can be CREDIT or INSTALMENT.
   * @member {String} type
   */
  exports.prototype['type'] = undefined;



  return exports;
}));


