class Env {
	readonly #domain_api = String(import.meta.env.VITE_DOMAIN_API)

	readonly #site_version = String(import.meta.env.VERSION)

	readonly #build_date = new Date(import.meta.env.BUILD_DATE)

	readonly #github_homepage = String(import.meta.env.VITE_GITHUB_HOMEPAGE)

	get domain_api (): string {
		return this.#domain_api
	}

	get site_version (): string {
		return this.#site_version
	}

	get build_date (): string {
		return this.#build_date.toISOString()
	}

	get github_homepage (): string {
		return this.#github_homepage
	}
}

export const env = new Env()
