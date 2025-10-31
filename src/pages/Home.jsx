import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Footer from '../components/Footer.jsx'
import ScrollProgress from '../components/ScrollProgress.jsx'
import { Suspense, lazy } from 'react'

const Services = lazy(() => import('../components/Services.jsx'))
const Projects = lazy(() => import('../components/Projects.jsx'))
const About = lazy(() => import('../components/About.jsx'))
const Testimonials = lazy(() => import('../components/Testimonials.jsx'))
const Contact = lazy(() => import('../components/Contact.jsx'))

export default function Home() {
	return (
		<div className="min-h-screen font-sans bg-[#0F172A] text-white">
			<ScrollProgress />
			<Navbar />
			<main>
				<section id="home"><Hero /></section>
				<Suspense fallback={<div className="px-6 py-12 text-white/60">Loading…</div>}>
					<section id="services"><Services /></section>
					<section id="projects"><Projects /></section>
					<section id="about"><About /></section>
					<section id="testimonials"><Testimonials /></section>
					<section id="contact"><Contact /></section>
				</Suspense>
			</main>
			<Footer />
		</div>
	)
}
