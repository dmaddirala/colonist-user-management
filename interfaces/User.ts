export interface User {
    id: string;
    userName: string;  // Match the API response key exactly
    avatar?: string;   // API response doesn't include `avatar`, making it optional
    createdAt: string;
    country: string;
}
