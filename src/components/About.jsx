import { useEffect, useRef } from 'react'

const stats = [
	{ label: 'Projects Completed', value: 50 },
	{ label: 'Happy Clients', value: 20 },
	{ label: 'Years Experience', value: 5 },
	{ label: 'Team Members', value: 15 },
]

function useCountUp(target, duration = 1200) {
	const ref = useRef(null)
	useEffect(() => {
		const el = ref.current
		if (!el) return
		let start
		const step = (ts) => {
			if (!start) start = ts
			const p = Math.min(1, (ts - start) / duration)
			el.textContent = Math.round(target * p).toString()
			if (p < 1) requestAnimationFrame(step)
		}
		const io = new IntersectionObserver((entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) {
					requestAnimationFrame(step)
					io.disconnect()
				}
			})
		}, { threshold: 0.3 })
		io.observe(el)
	}, [target, duration])
	return ref
}

export default function About() {
	return (
		<section className="py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				<div>
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Why Choose AppDost?</h2>
					<p className="mt-5 text-white/70">
						We are a team of designers and engineers passionate about crafting high-quality digital experiences. From concept to launch, we deliver products that are fast, accessible, and delightful to use.
					</p>
					<div className="mt-8 grid grid-cols-2 gap-6">
						{stats.map((s) => {
							const ref = useCountUp(s.value)
							return (
								<div key={s.label} className="p-6 rounded-2xl bg-white/5 border border-white/10">
									<div className="text-4xl font-extrabold">
										<span ref={ref}>0</span>+
									</div>
									<p className="mt-2 text-white/70">{s.label}</p>
								</div>
							)
						})}
					</div>
				</div>
				<div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-white/[0.04] border border-white/10">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.15),transparent_40%)]" />
					<div className="absolute inset-6 rounded-2xl backdrop-blur-md bg-black/10 border border-white/10 flex items-center justify-center text-center p-6">
						<p className="text-white/80 max-w-sm">We combine rigorous engineering with thoughtful design to build products that scale and delight.</p>
					</div>
				</div>
			</div>
		</section>
	)
}
