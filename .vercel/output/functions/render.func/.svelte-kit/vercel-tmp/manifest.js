export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon/android-chrome-192x192.png","favicon/android-chrome-512x512.png","favicon/apple-touch-icon.png","favicon/favicon-16x16.png","favicon/favicon-32x32.png","favicon/favicon.ico","favicon.png","fonts/Prompt-Black.ttf","fonts/Prompt-BlackItalic.ttf","images/cursor.png","images/pointer.png","robots.txt","site.webmanifest","star.gltf","service-worker.js"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".ttf":"font/ttf",".txt":"text/plain",".webmanifest":"application/manifest+json",".gltf":"model/gltf+json"},
	_: {
		entry: {"file":"_app/immutable/start-dd2fb8c8.js","imports":["_app/immutable/start-dd2fb8c8.js","_app/immutable/chunks/index-7d267ca8.js","_app/immutable/chunks/singletons-68b218db.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: () => import('../output/server/entries/endpoints/sitemap.xml/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
