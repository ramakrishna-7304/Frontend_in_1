import { Quote } from 'lucide-react'

const testimonials = [
	{
		quote: 'AppDost transformed our vision into reality. The app they built exceeded our expectations!',
		name: 'Sarah Johnson',
		role: 'CEO at TechStart',
	},
	{
		quote: 'Professional, creative, and always on time. Best development partner we\'ve worked with.',
		name: 'Michael Chen',
		role: 'Founder of GrowthLabs',
	},
	{
		quote: "The team's attention to detail and user experience is unmatched. Highly recommended!",
		name: 'Emily Rodriguez',
		role: 'Product Manager at InnovateCo',
	},
]

function Stars() {
	return (
		<div className="flex gap-1" role="img" aria-label="5 out of 5 stars">
			{Array.from({ length: 5 }).map((_, i) => (
				<span key={i} className="text-amber-400" aria-hidden="true">★</span>
			))}
		</div>
	)
}

export default function Testimonials() {
	return (
		<section className="py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">What Our Clients Say</h2>
					<p className="mt-4 text-white/70">Real feedback from teams we\'ve partnered with.</p>
				</div>
				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
					{testimonials.map((t) => (
						<article key={t.name} role="listitem" className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:-translate-y-1.5 transition-all duration-300">
							<Quote className="w-8 h-8 text-white/40" aria-hidden="true" />
							<p className="mt-4 italic text-white/90">“{t.quote}”</p>
							<div className="mt-6"><Stars /></div>
							<div className="mt-6">
								<p className="font-semibold">{t.name}</p>
								<p className="text-sm text-white/70">{t.role}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
