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
 * @interface ProjectName
 */
export interface ProjectName {
}

/**
 * Check if a given object implements the ProjectName interface.
 */
export function instanceOfProjectName(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProjectNameFromJSON(json: any): ProjectName {
    return ProjectNameFromJSONTyped(json, false);
}

export function ProjectNameFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectName {
    return json;
}

export function ProjectNameToJSON(value?: ProjectName | null): any {
    return value;
}

