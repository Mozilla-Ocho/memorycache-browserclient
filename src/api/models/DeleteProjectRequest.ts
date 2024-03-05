/* tslint:disable */
/* eslint-disable */
/**
 * Memory Cache Hub
 * A backend server for Memory Cache.
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface DeleteProjectRequest
 */
export interface DeleteProjectRequest {
    /**
     * 
     * @type {number}
     * @memberof DeleteProjectRequest
     */
    projectId: number;
}

/**
 * Check if a given object implements the DeleteProjectRequest interface.
 */
export function instanceOfDeleteProjectRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "projectId" in value;

    return isInstance;
}

export function DeleteProjectRequestFromJSON(json: any): DeleteProjectRequest {
    return DeleteProjectRequestFromJSONTyped(json, false);
}

export function DeleteProjectRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteProjectRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': json['project_id'],
    };
}

export function DeleteProjectRequestToJSON(value?: DeleteProjectRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.projectId,
    };
}

