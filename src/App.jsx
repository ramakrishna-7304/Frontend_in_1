import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import About from './components/About.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
	return (
		<div className="min-h-screen font-sans bg-[#0F172A] text-white">
			<Navbar />
			<main>
				<section id="home"><Hero /></section>
				<section id="services"><Services /></section>
				<section id="projects"><Projects /></section>
				<section id="about"><About /></section>
				<section id="testimonials"><Testimonials /></section>
				<section id="contact"><Contact /></section>
			</main>
			<Footer />
		</div>
	)
}

export default App
