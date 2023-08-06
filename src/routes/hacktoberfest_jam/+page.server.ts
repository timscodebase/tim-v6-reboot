import type { PageServerLoad } from './$types';
import { SECRET_GOOGLE_API_KEY } from '$env/static/private';

export const load = (async () => {
    return {
        props: {
            googleApiKey: SECRET_GOOGLE_API_KEY,
        },
    };
}) satisfies PageServerLoad;