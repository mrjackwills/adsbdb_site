export function goto (id: string) {
	const elm = document.querySelector(`#${id}`)
	if (elm) {
		const rect = elm.getBoundingClientRect()
		const target = window.scrollY + rect.top - 15
		window.scrollTo({
			top: target,
			behavior: 'smooth',
		})
	}
}
