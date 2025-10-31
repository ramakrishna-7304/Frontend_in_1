import { motion } from 'framer-motion'

export default function Hero() {
	return (
		<div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
			{/* Animated background */}
			<div className="absolute inset-0 bg-animated-gradient opacity-30" />
			<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" />
			<div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] rounded-full bg-secondary/20 blur-3xl" />

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
				className="relative z-10 text-center px-6"
			>
				<motion.h1
					className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-cyan-400 to-secondary"
				>
					Transforming Ideas Into Digital Excellence
				</motion.h1>
				<p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
					We craft beautiful mobile apps and web solutions that users love.
				</p>
				<div className="mt-10 flex items-center justify-center gap-4">
					<a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-transform hover:scale-105 focus-visible:scale-105">
						Start Your Project
					</a>
					<a href="#projects" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:bg-white/5 transition-colors">
						View Our Work
					</a>
				</div>

				{/* Stats ticker */}
				<div className="mt-10 flex items-center justify-center gap-6 text-white/70 text-sm">
					<span>50+ Projects</span>
					<span className="w-1 h-1 rounded-full bg-white/20" />
					<span>20+ Clients</span>
					<span className="w-1 h-1 rounded-full bg-white/20" />
					<span>5 Years Experience</span>
				</div>
			</motion.div>

			{/* Scroll indicator */}
			<div className="absolute bottom-6 left-0 right-0 flex justify-center">
				<a href="#services" className="group inline-flex flex-col items-center text-white/60 hover:text-white/90 transition-colors">
					<span className="text-xs">Scroll down</span>
					<span className="mt-1 w-5 h-5 border-b-2 border-r-2 rotate-45 group-hover:translate-y-1 transition-transform" />
				</a>
			</div>
		</div>
	)
}
