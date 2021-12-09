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
    define(['ApiClient', 'model/GatewayConfigurationWeb', 'model/LineItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GatewayConfigurationWeb'), require('./LineItem'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.PaymentSession = factory(root.PodApiClient.ApiClient, root.PodApiClient.GatewayConfigurationWeb, root.PodApiClient.LineItem);
  }
}(this, function(ApiClient, GatewayConfigurationWeb, LineItem) {
  'use strict';



  /**
   * The PaymentSession model module.
   * @module model/PaymentSession
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>PaymentSession</code>.
   * @alias module:model/PaymentSession
   * @class
   * @param id {String} Payment session id created by the POD system for this payment session.
   * @param financierId {String} Financier ID that owns this payment session.
   * @param contractId {String} Contract ID that owns this payment session.
   * @param defaultPaymentMethodId {String} Default payment method id for user.
   * @param gatewayConfiguration {module:model/GatewayConfigurationWeb} 
   * @param orderId {String} Order id that generated for sending to payment gateway to make the transaction.
   * @param podTransactionId {String} Transaction id that generated for sending to payment gateway to make the transaction.
   * @param totalAmount {String} Total payment amount. Formatted according to ISO 4217 standard.
   * @param currency {String} Currency in ISO 4217 format.
   * @param lightBoxUrl {String} This url used to invoke the payment page from the light box
   * @param lineItems {Array.<module:model/LineItem>} 
   */
  var exports = function(id, financierId, contractId, defaultPaymentMethodId, gatewayConfiguration, orderId, podTransactionId, totalAmount, currency, lightBoxUrl, lineItems) {
    var _this = this;

    _this['id'] = id;
    _this['financierId'] = financierId;
    _this['contractId'] = contractId;
    _this['defaultPaymentMethodId'] = defaultPaymentMethodId;
    _this['gatewayConfiguration'] = gatewayConfiguration;
    _this['orderId'] = orderId;
    _this['podTransactionId'] = podTransactionId;
    _this['totalAmount'] = totalAmount;
    _this['currency'] = currency;
    _this['lightBoxUrl'] = lightBoxUrl;
    _this['lineItems'] = lineItems;
  };

  /**
   * Constructs a <code>PaymentSession</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentSession} obj Optional instance to populate.
   * @return {module:model/PaymentSession} The populated <code>PaymentSession</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('authToken')) {
        obj['authToken'] = ApiClient.convertToType(data['authToken'], 'String');
      }
      if (data.hasOwnProperty('tokenType')) {
        obj['tokenType'] = ApiClient.convertToType(data['tokenType'], 'String');
      }
      if (data.hasOwnProperty('expiresIn')) {
        obj['expiresIn'] = ApiClient.convertToType(data['expiresIn'], 'String');
      }
      if (data.hasOwnProperty('financierId')) {
        obj['financierId'] = ApiClient.convertToType(data['financierId'], 'String');
      }
      if (data.hasOwnProperty('contractId')) {
        obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
      }
      if (data.hasOwnProperty('defaultPaymentMethodId')) {
        obj['defaultPaymentMethodId'] = ApiClient.convertToType(data['defaultPaymentMethodId'], 'String');
      }
      if (data.hasOwnProperty('gatewayConfiguration')) {
        obj['gatewayConfiguration'] = GatewayConfigurationWeb.constructFromObject(data['gatewayConfiguration']);
      }
      if (data.hasOwnProperty('orderId')) {
        obj['orderId'] = ApiClient.convertToType(data['orderId'], 'String');
      }
      if (data.hasOwnProperty('podTransactionId')) {
        obj['podTransactionId'] = ApiClient.convertToType(data['podTransactionId'], 'String');
      }
      if (data.hasOwnProperty('totalAmount')) {
        obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'String');
      }
      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('lightBoxUrl')) {
        obj['lightBoxUrl'] = ApiClient.convertToType(data['lightBoxUrl'], 'String');
      }
      if (data.hasOwnProperty('lineItems')) {
        obj['lineItems'] = ApiClient.convertToType(data['lineItems'], [LineItem]);
      }
    }
    return obj;
  }

  /**
   * Payment session id created by the POD system for this payment session.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Access token generater for this payment session.
   * @member {String} accessToken
   */
  exports.prototype['authToken'] = undefined;
  /**
   * Type of Token generated for this payment session.
   * @member {String} tokenType
   */
  exports.prototype['tokenType'] = undefined;
  /**
   * Expiry Time for this session Id.
   * @member {String} expiresIn
   */
  exports.prototype['expiresIn'] = undefined;
  /**
   * Financier ID that owns this payment session.
   * @member {String} financierId
   */
  exports.prototype['financierId'] = undefined;
  /**
   * Contract ID that owns this payment session.
   * @member {String} contractId
   */
  exports.prototype['contractId'] = undefined;
  /**
   * Default payment method id for user.
   * @member {String} defaultPaymentMethodId
   */
  exports.prototype['defaultPaymentMethodId'] = undefined;
  /**
   * @member {module:model/GatewayConfigurationWeb} gatewayConfiguration
   */
  exports.prototype['gatewayConfiguration'] = undefined;
  /**
   * Order id that generated for sending to payment gateway to make the transaction.
   * @member {String} orderId
   */
  exports.prototype['orderId'] = undefined;
  /**
   * Transaction id that generated for sending to payment gateway to make the transaction.
   * @member {String} podTransactionId
   */
  exports.prototype['podTransactionId'] = undefined;
  /**
   * Total payment amount. Formatted according to ISO 4217 standard.
   * @member {String} totalAmount
   */
  exports.prototype['totalAmount'] = undefined;
  /**
   * Currency in ISO 4217 format.
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * This url used to invoke the payment page from the light box
   * @member {String} lightBoxUrl
   */
  exports.prototype['lightBoxUrl'] = undefined;
  /**
   * @member {Array.<module:model/LineItem>} lineItems
   */
  exports.prototype['lineItems'] = undefined;



  return exports;
}));


