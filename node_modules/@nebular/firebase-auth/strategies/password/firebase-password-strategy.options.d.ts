/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthStrategyOptions, NbPasswordStrategyMessage, NbPasswordStrategyModule, NbStrategyToken } from '@nebular/auth';
export declare class NbFirebasePasswordStrategyOptions extends NbAuthStrategyOptions {
    token?: NbStrategyToken;
    register?: boolean | NbPasswordStrategyModule;
    login?: boolean | NbPasswordStrategyModule;
    logout?: boolean | NbPasswordStrategyModule;
    refreshToken?: boolean | NbPasswordStrategyModule;
    requestPassword?: boolean | NbPasswordStrategyModule;
    resetPassword?: boolean | NbPasswordStrategyModule;
    errors?: NbPasswordStrategyMessage;
    messages?: NbPasswordStrategyMessage;
}
export declare const firebasePasswordStrategyOptions: NbFirebasePasswordStrategyOptions;
