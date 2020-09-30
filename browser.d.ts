import 'whatwg-fetch';
export declare const fetch: ((input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>) & typeof globalThis.fetch, Headers: {
    new (init?: Headers | string[][] | Record<string, string> | undefined): Headers;
    prototype: Headers;
}, Request: {
    new (input: RequestInfo, init?: RequestInit | undefined): Request;
    prototype: Request;
}, Response: {
    new (body?: string | Blob | ArrayBufferView | ArrayBuffer | FormData | URLSearchParams | ReadableStream<Uint8Array> | null | undefined, init?: ResponseInit | undefined): Response;
    prototype: Response;
    error(): Response;
    redirect(url: string, status?: number | undefined): Response;
};
