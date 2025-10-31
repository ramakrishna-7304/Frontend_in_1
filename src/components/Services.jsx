import { Smartphone, Globe, Palette, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
	{
		icon: Smartphone,
		title: 'Mobile App Development',
		description: 'Native and cross-platform apps that deliver exceptional user experiences.',
	},
	{
		icon: Globe,
		title: 'Web Development',
		description: 'Responsive, fast, and SEO-optimized websites built with modern frameworks.',
	},
	{
		icon: Palette,
		title: 'UI/UX Design',
		description: 'Beautiful, intuitive interfaces that users love to interact with.',
	},
	{
		icon: Cloud,
		title: 'Cloud Solutions',
		description: 'Scalable cloud infrastructure and deployment solutions.',
	},
]

export default function Services() {
	return (
		<section className="py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h2>
					<p className="mt-4 text-white/70">We build world-class digital products with a focus on performance and user experience.</p>
				</div>
				<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
					{services.map((s, idx) => (
						<motion.div
							key={s.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ delay: idx * 0.08 }}
							className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-2xl"
							role="listitem"
						>
							<div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-white/20" />
							<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
								<s.icon className="w-6 h-6" />
							</div>
							<h3 className="mt-6 text-2xl font-bold">{s.title}</h3>
							<p className="mt-3 text-white/70">{s.description}</p>
							<button className="mt-6 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
								Learn More →
							</button>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
