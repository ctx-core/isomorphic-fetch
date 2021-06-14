import real_fetch from 'node-fetch';
export { Headers, Request, Response } from 'node-fetch';
export function fetch(url, options) {
    if (/^\/\//.test(url)) {
        url = 'https:' + url;
    }
    return real_fetch.call(this, url, options);
}
//# sourceMappingURL=src/index.js.map