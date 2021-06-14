import 'whatwg-fetch';
export declare const fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof globalThis.fetch, Headers: {
    new (init?: HeadersInit | undefined): Headers;
    prototype: Headers;
}, Request: {
    new (input: RequestInfo, init?: RequestInit | undefined): Request;
    prototype: Request;
}, Response: {
    new (body?: BodyInit | null | undefined, init?: ResponseInit | undefined): Response;
    prototype: Response;
    error(): Response;
    redirect(url: string, status?: number | undefined): Response;
};
