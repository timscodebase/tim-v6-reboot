import type { PageLoad } from './$types';

export const load = (async (e) => {
	try {
		const res = await e.fetch('$lib/data/resume_data.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    return data
	} catch (error) {
		console.error(error)
		return new Response('Could Not Fetch JSON', {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}) satisfies PageLoad;