export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","service-worker.js"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-85cd0618.js","imports":["_app/immutable/start-85cd0618.js","_app/immutable/chunks/index-7d267ca8.js","_app/immutable/chunks/singletons-68b218db.js"],"stylesheets":[],"fonts":[]},
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
