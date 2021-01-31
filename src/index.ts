import real_fetch from 'node-fetch'
export { Headers, Request, Response } from 'node-fetch'
export function fetch(this:any, url:string, options?:object) {
	if (/^\/\//.test(url)) {
		url = 'https:' + url
	}
	return real_fetch.call(this, url, options)
}
