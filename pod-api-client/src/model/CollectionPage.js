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
    root.PodApiClient.CollectionPage = factory(root.PodApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The CollectionPage model module.
   * @module model/CollectionPage
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>CollectionPage</code>.
   * @alias module:model/CollectionPage
   * @class
   * @param offset {Number} Page offset from the beginning of the collection.
   * @param limit {Number} Maximum number of items returned.
   * @param items {Object} Array of items returned.
   */
  var exports = function(offset, limit, items) {
    var _this = this;

    _this['offset'] = offset;
    _this['limit'] = limit;
    _this['items'] = items;
  };

  /**
   * Constructs a <code>CollectionPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CollectionPage} obj Optional instance to populate.
   * @return {module:model/CollectionPage} The populated <code>CollectionPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], Object);
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Number of items returned.
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Page offset from the beginning of the collection.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Maximum number of items returned.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Array of items returned.
   * @member {Object} items
   */
  exports.prototype['items'] = undefined;
  /**
   * Total number of items available.
   * @member {Number} total
   */
  exports.prototype['total'] = undefined;



  return exports;
}));


