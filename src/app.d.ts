// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface PageData {}

	// interface Error {}

	// interface Platform {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache }
	}

	interface Session {}

	interface Stuff {}
}

export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName('A');
}
