import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import { useParams, Link } from 'react-router-dom'
import { getProjectBySlug } from '../data/projects.js'
import { motion } from 'framer-motion'

export default function ProjectDetail() {
	const { slug } = useParams()
	const project = getProjectBySlug(slug)

	if (!project) {
		return (
			<div className="min-h-screen bg-[#0F172A] text-white">
				<Navbar />
				<main className="max-w-5xl mx-auto px-6 py-24">
					<h1 className="text-3xl font-bold">Project not found</h1>
					<Link to="/" className="mt-6 inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">← Back to Home</Link>
				</main>
				<Footer />
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-[#0F172A] text-white">
			<ScrollProgress />
			<Navbar />
			<motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
				<header className="relative overflow-hidden">
					<div className="absolute inset-0 bg-animated-gradient opacity-20" />
					<div className="max-w-5xl mx-auto px-6 py-20">
						<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{project.title}</h1>
						<p className="mt-4 text-white/80 max-w-3xl">{project.description}</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{project.stack.map((t) => (
								<span key={t} className="px-2.5 py-1 rounded-full text-xs bg-white/10 text-white/80">{t}</span>
							))}
						</div>
						<div className="mt-8 flex gap-3">
							<a href={project.githubUrl} target="_blank" rel="noreferrer" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold shadow-lg">View on GitHub</a>
							<Link to="/" className="px-5 py-2.5 rounded-xl border border-white/15 hover:bg-white/5">Back to home</Link>
						</div>
					</div>
				</header>
				<main className="max-w-5xl mx-auto px-6 py-12">
					<h2 className="text-2xl font-bold">Highlights</h2>
					<ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
						{project.highlights.map((f) => (
							<li key={f} className="p-5 rounded-2xl bg-white/5 border border-white/10">{f}</li>
						))}
					</ul>
				</main>
			</motion.div>
			<Footer />
		</div>
	)
}
