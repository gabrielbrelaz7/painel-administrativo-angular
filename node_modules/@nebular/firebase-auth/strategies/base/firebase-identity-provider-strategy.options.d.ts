/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbPasswordStrategyMessage, NbPasswordStrategyModule, NbAuthStrategyOptions, NbStrategyToken } from '@nebular/auth';
export declare class NbFirebaseIdentityProviderStrategyOptions extends NbAuthStrategyOptions {
    token?: NbStrategyToken;
    logout?: boolean | NbPasswordStrategyModule;
    authenticate?: boolean | NbPasswordStrategyModule;
    errors?: NbPasswordStrategyMessage;
    messages?: NbPasswordStrategyMessage;
    scopes?: string[];
    customParameters?: {
        [key: string]: string;
    };
}
