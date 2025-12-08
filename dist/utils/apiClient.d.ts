import { EaoAnalyticsPayload } from '../types';
/**
 * Record user login analytics by calling EPIC.centre API
 * @param apiUrl - Base URL of EPIC.centre API
 * @param accessToken - User's access token for authentication
 * @param payload - EAO Analytics payload
 */
export declare function trackLogin(apiUrl: string, accessToken: string, payload: EaoAnalyticsPayload): Promise<void>;
//# sourceMappingURL=apiClient.d.ts.map