import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
	{ id: 'home', label: 'Home' },
	{ id: 'services', label: 'Services' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'about', label: 'About' },
	{ id: 'testimonials', label: 'Testimonials' },
	{ id: 'contact', label: 'Contact' },
]

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false)
	const [open, setOpen] = useState(false)
	const [active, setActive] = useState('home')

	useEffect(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 8)
			// Active section detection
			let current = 'home'
			for (const l of links) {
				const el = document.getElementById(l.id)
				if (!el) continue
				const rect = el.getBoundingClientRect()
				if (rect.top <= 100 && rect.bottom >= 100) {
					current = l.id
					break
				}
			}
			setActive(current)
		}
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const scrollToSection = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
		setOpen(false)
	}

	return (
		<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[#0F172A]/70 shadow-lg' : 'bg-transparent'} animate-fade-in-up`}>
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<div className="text-2xl font-extrabold tracking-tight">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">AppDost</span>
					</div>
				</div>
				<div className="hidden md:flex items-center gap-8">
					{links.map((l) => (
						<button
							key={l.id}
							onClick={() => scrollToSection(l.id)}
							className={`relative text-sm font-medium transition-colors hover:text-white/90 ${active === l.id ? 'text-white' : 'text-white/70'}`}
						>
							{l.label}
							<span className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-primary to-secondary transition-transform ${active === l.id ? 'scale-x-100' : 'scale-x-0'} origin-left`}></span>
						</button>
					))}
					<button onClick={() => scrollToSection('contact')} className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-transform hover:scale-105 focus-visible:scale-105">
						Get Started
					</button>
				</div>
				<button className="md:hidden p-2" aria-label="Open Menu" onClick={() => setOpen((v) => !v)}>
					{open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
				</button>
			</nav>
			{/* Mobile menu */}
			<div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
				<div className="px-4 pb-4 space-y-2">
					{links.map((l) => (
						<button key={l.id} onClick={() => scrollToSection(l.id)} className={`block w-full text-left px-3 py-2 rounded-lg hover:bg-white/5 ${active === l.id ? 'text-white' : 'text-white/80'}`}>
							{l.label}
						</button>
					))}
					<button onClick={() => scrollToSection('contact')} className="w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold shadow-lg">
						Get Started
					</button>
				</div>
			</div>
		</header>
	)
}
