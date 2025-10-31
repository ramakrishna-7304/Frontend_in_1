import { motion } from 'framer-motion'
import { projects as projectsData } from '../data/projects.js'
import { Link } from 'react-router-dom'

const projects = projectsData

export default function Projects() {
	return (
		<section className="py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6">
				<div className="text-center max-w-2xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Featured Projects</h2>
					<p className="mt-4 text-white/70">A selection of our recent work across mobile and web.</p>
				</div>
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" role="list">
					{projects.map((p, idx) => (
						<motion.article
							key={p.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ delay: idx * 0.06 }}
							className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10"
							aria-label={p.title}
						>
							<div className="aspect-[16/10] bg-gradient-to-br from-white/10 to-white/[0.02]" />
							<div className="p-6">
								<h3 className="text-xl font-bold">{p.title}</h3>
								<div className="mt-3 flex flex-wrap gap-2">
									{p.stack.map((t) => (
										<span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80">
											{t}
										</span>
									))}
								</div>
							</div>
							<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="absolute inset-x-0 bottom-0 translate-y-6 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all p-6 flex items-center justify-between">
								<p className="text-white/80 text-sm">High-level case study available</p>
								<Link to={`/projects/${p.slug}`} aria-label={`View details of ${p.title}`} className="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary font-semibold shadow-lg">View Details</Link>
							</div>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	)
}
