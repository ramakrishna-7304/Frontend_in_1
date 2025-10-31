import { useState } from 'react'
import { Mail, Phone, Linkedin, Twitter, Github, Instagram } from 'lucide-react'

export default function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
	const [errors, setErrors] = useState({})
	const [loading, setLoading] = useState(false)
	const [success, setSuccess] = useState('')

	const validate = () => {
		const e = {}
		if (!formData.name.trim()) e.name = 'Name is required'
		if (!formData.email.trim()) e.email = 'Email is required'
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email'
		if (!formData.message.trim()) e.message = 'Message is required'
		return e
	}

	const onSubmit = async (ev) => {
		ev.preventDefault()
		setSuccess('')
		const e = validate()
		setErrors(e)
		if (Object.keys(e).length) return
		setLoading(true)
		await new Promise((r) => setTimeout(r, 900))
		setLoading(false)
		setFormData({ name: '', email: '', phone: '', message: '' })
		setSuccess('Thanks! Your message has been sent.')
	}

	return (
		<section className="py-20 md:py-28">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
				<div>
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Let\'s Build Something Amazing</h2>
					<p className="mt-4 text-white/70">Tell us about your project and we\'ll get back to you within 24 hours.</p>
					<form onSubmit={onSubmit} className="mt-8 space-y-4">
						<div>
							<label className="block text-sm mb-1">Name</label>
							<input
								type="text"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.name ? 'border-red-500/60' : 'border-white/10'} focus:border-secondary outline-none transition-colors`}
								placeholder="Jane Doe"
							/>
							{errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
						</div>
						<div>
							<label className="block text-sm mb-1">Email</label>
							<input
								type="email"
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.email ? 'border-red-500/60' : 'border-white/10'} focus:border-secondary outline-none transition-colors`}
								placeholder="jane@example.com"
							/>
							{errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
						</div>
						<div>
							<label className="block text-sm mb-1">Phone (optional)</label>
							<input
								type="tel"
								value={formData.phone}
								onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
								className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary outline-none transition-colors"
								placeholder="+91 12345 67890"
							/>
						</div>
						<div>
							<label className="block text-sm mb-1">Message</label>
							<textarea
								rows={5}
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								className={`w-full px-4 py-3 rounded-xl bg-white/5 border ${errors.message ? 'border-red-500/60' : 'border-white/10'} focus:border-secondary outline-none transition-colors`}
								placeholder="Tell us about your goals..."
							/>
							{errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
						</div>
						<button disabled={loading} className="w-full md:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary font-semibold shadow-lg hover:shadow-primary/40 transition-transform hover:scale-[1.02] disabled:opacity-60">
							{loading ? 'Sending…' : 'Send Message'}
						</button>
						{success && <p className="text-emerald-400 mt-3">{success}</p>}
					</form>
				</div>
				<div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-fit">
					<h3 className="text-2xl font-bold">Contact Info</h3>
					<ul className="mt-4 space-y-3 text-white/80">
						<li className="flex items-center gap-3"><Mail className="w-5 h-5" /> contact@appdost.com</li>
						<li className="flex items-center gap-3"><Phone className="w-5 h-5" /> +91 1234567890</li>
					</ul>
					<div className="mt-6 flex items-center gap-3">
						<a aria-label="LinkedIn" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Linkedin className="w-5 h-5" /></a>
						<a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Twitter className="w-5 h-5" /></a>
						<a aria-label="GitHub" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Github className="w-5 h-5" /></a>
						<a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><Instagram className="w-5 h-5" /></a>
					</div>
				</div>
			</div>
		</section>
	)
}
