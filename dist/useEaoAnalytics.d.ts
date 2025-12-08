import { EaoAnalyticsOptions } from './types';
/**
 * React hook to record user login analytics across EPIC applications
 * Automatically records login analytics when user is authenticated
 */
export declare function trackAnalytics(options: EaoAnalyticsOptions): {
    isRecording: boolean;
    error: Error | null;
};
//# sourceMappingURL=useEaoAnalytics.d.ts.map