/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The RestCreatePeerFolderRequest model module.
* @module model/RestCreatePeerFolderRequest
* @version 1.0
*/
export default class RestCreatePeerFolderRequest {
    /**
    * Constructs a new <code>RestCreatePeerFolderRequest</code>.
    * @alias module:model/RestCreatePeerFolderRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestCreatePeerFolderRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestCreatePeerFolderRequest} obj Optional instance to populate.
    * @return {module:model/RestCreatePeerFolderRequest} The populated <code>RestCreatePeerFolderRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestCreatePeerFolderRequest();

            
            
            

            if (data.hasOwnProperty('PeerAddress')) {
                obj['PeerAddress'] = ApiClient.convertToType(data['PeerAddress'], 'String');
            }
            if (data.hasOwnProperty('Path')) {
                obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} PeerAddress
    */
    PeerAddress = undefined;
    /**
    * @member {String} Path
    */
    Path = undefined;








}


