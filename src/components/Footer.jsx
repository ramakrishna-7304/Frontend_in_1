import { Linkedin, Twitter, Github, Instagram } from 'lucide-react'

export default function Footer() {
	return (
		<footer className="pt-16 border-t border-white/10 bg-[#0C1222]">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
				<div>
					<div className="text-2xl font-extrabold tracking-tight">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AppDost</span>
					</div>
					<p className="mt-3 text-white/70">We build products that delight users and drive business results.</p>
				</div>
				<nav aria-label="Footer Quick Links">
					<h4 className="font-semibold">Quick Links</h4>
					<ul className="mt-3 space-y-2 text-white/70">
						<li><a href="#home" className="hover:text-white">Home</a></li>
						<li><a href="#about" className="hover:text-white">About</a></li>
						<li><a href="#services" className="hover:text-white">Services</a></li>
						<li><a href="#projects" className="hover:text-white">Projects</a></li>
						<li><a href="#contact" className="hover:text-white">Contact</a></li>
					</ul>
				</nav>
				<div>
					<h4 className="font-semibold">Services</h4>
					<ul className="mt-3 space-y-2 text-white/70">
						<li>Mobile App Development</li>
						<li>Web Development</li>
						<li>UI/UX Design</li>
						<li>Cloud Solutions</li>
					</ul>
				</div>
				<div>
					<h4 className="font-semibold">Connect</h4>
					<div className="mt-3 flex items-center gap-3">
						<a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Linkedin className="w-5 h-5" /></a>
						<a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Twitter className="w-5 h-5" /></a>
						<a aria-label="GitHub" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Github className="w-5 h-5" /></a>
						<a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Instagram className="w-5 h-5" /></a>
					</div>
				</div>
			</div>
			<div className="mt-12 border-t border-white/10">
				<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-white/60 text-sm">
					<p>© {new Date().getFullYear()} AppDost. All rights reserved.</p>
					<a href="#home" className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10">Back to top ↑</a>
				</div>
			</div>
		</footer>
	)
}
