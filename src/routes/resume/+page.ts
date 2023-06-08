import { dev } from '$app/environment'

export async function load({ fetch }) {
	const res = await fetch('src/lib/data/resume_data.json', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
	const data = await res.json()

	return data
}

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement...
export const csr = dev

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in prod
// export const prerender = true;
