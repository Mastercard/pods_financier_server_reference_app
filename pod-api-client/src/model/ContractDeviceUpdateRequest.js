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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.PodApiClient) {
      root.PodApiClient = {};
    }
    root.PodApiClient.ContractDeviceUpdateRequest = factory(root.PodApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ContractDeviceUpdateRequest model module.
   * @module model/ContractDeviceUpdateRequest
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>ContractDeviceUpdateRequest</code>.
   * @alias module:model/ContractDeviceUpdateRequest
   * @class
   * @param offlineLockTimestamp {Number} Timestamp describing when phone will be locked.
   */
  var exports = function(offlineLockTimestamp) {
    var _this = this;

    _this['offlineLockTimestamp'] = offlineLockTimestamp;
  };

  /**
   * Constructs a <code>ContractDeviceUpdateRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContractDeviceUpdateRequest} obj Optional instance to populate.
   * @return {module:model/ContractDeviceUpdateRequest} The populated <code>ContractDeviceUpdateRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('deviceIMEI')) {
        obj['deviceIMEI'] = ApiClient.convertToType(data['deviceIMEI'], 'String');
      }
      if (data.hasOwnProperty('offlineLockTimestamp')) {
        obj['offlineLockTimestamp'] = ApiClient.convertToType(data['offlineLockTimestamp'], 'Number');
      }
    }
    return obj;
  }

  /**
   * International Mobile Equipment Identity Number
   * @member {String} deviceIMEI
   */
  exports.prototype['deviceIMEI'] = undefined;
  /**
   * Timestamp describing when phone will be locked.
   * @member {Number} offlineLockTimestamp
   */
  exports.prototype['offlineLockTimestamp'] = undefined;



  return exports;
}));


