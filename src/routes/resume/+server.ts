import { json } from '@sveltejs/kit'
import db from '../../lib/utils'

export async function GET() {
	try {
		const data = await db.get('resume_data')
		return json(data)
	} catch (error) {
		console.error(error)
		return new Response('Internal Server Error', {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}

export async function POST(event): Promise<Response> {
	const data = await event.request.formData()
	const key = data.get('key')
	const value = data.get('value')

	try {
		await db.set(key, value)
		return new Response('OK', {
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	} catch (error) {
		console.error(error)
		return new Response('Internal Server Error', {
			status: 500,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}
}
