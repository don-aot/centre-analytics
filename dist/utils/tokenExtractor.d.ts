import { User } from 'oidc-client-ts';
import { UserInfo } from '../types';
/**
 * Extract user_auth_guid from OIDC user object
 * Uses preferred_username as user_auth_guid
 */
export declare function extractUserInfo(user: User | null): UserInfo | null;
//# sourceMappingURL=tokenExtractor.d.ts.map