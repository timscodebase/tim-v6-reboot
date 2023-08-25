import {sequence} from '@sveltejs/kit/hooks';
import * as Sentry from '@sentry/sveltekit';
import type { Handle } from '@sveltejs/kit'

Sentry.init({
    dsn: "https://78fef3afaa914e868c2553e6a0094c0d@o549455.ingest.sentry.io/5672263",
    tracesSampleRate: 1
})

export const handle: Handle = sequence(Sentry.sentryHandle(), async ({ event, resolve }) => {
	let userid = event.cookies.get('userid')

	if (!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		userid = crypto.randomUUID()
		event.cookies.set('userid', userid, { path: '/' })
	}

	event.locals.userid = userid

	return resolve(event)
})
export const handleError = Sentry.handleErrorWithSentry();