import type { Auth } from '@/types/auth';

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}
declare global {
    interface Window {
        fbq?: (...args: any[]) => void;
    }
}

export {};
interface Window {
    fbq: (...args: unknown[]) => void;
}

