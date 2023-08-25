import { sentrySvelteKit } from "@sentry/sveltekit";
import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [sentrySvelteKit({
        sourceMapsUploadOptions: {
            org: "partners-in-code",
            project: "partners-in-code"
        }
    }), sveltekit()],

    test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
}

export default config