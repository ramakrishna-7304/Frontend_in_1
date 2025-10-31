export const services = [
	{
		slug: 'mobile-app-development',
		title: 'Mobile App Development',
		description: 'Native and cross-platform apps that deliver exceptional user experiences.',
		detail:	'We build performant, secure, and delightful iOS and Android apps using React Native and native stacks when necessary. Our process covers discovery, design, development, testing, and deployment to stores.',
		features: ['React Native & Native Modules', 'App Store & Play Store Publishing', 'Offline-first & Sync', 'CI/CD & OTA Updates'],
	},
	{
		slug: 'web-development',
		title: 'Web Development',
		description: 'Responsive, fast, and SEO-optimized websites built with modern frameworks.',
		detail:	'We deliver blazing-fast, SEO-friendly web apps using React, Next.js, and Vite, with strong focus on accessibility and DX.',
		features: ['React/Next.js', 'SSR/ISR & SEO', 'Tailwind CSS & Design Systems', 'Performance Budgets'],
	},
	{
		slug: 'ui-ux-design',
		title: 'UI/UX Design',
		description: 'Beautiful, intuitive interfaces that users love to interact with.',
		detail:	'We craft usable, beautiful interfaces rooted in user research, wireframes, and interactive prototypes.',
		features: ['Research & Wireframing', 'Interactive Prototypes', 'Design Systems', 'Usability Testing'],
	},
	{
		slug: 'cloud-solutions',
		title: 'Cloud Solutions',
		description: 'Scalable cloud infrastructure and deployment solutions.',
		detail:	'We architect scalable, reliable infrastructure leveraging AWS/GCP/Azure with modern DevOps practices.',
		features: ['IaC & Terraform', 'Kubernetes & Serverless', 'Monitoring & Observability', 'Security & Compliance'],
	},
]

export function getServiceBySlug(slug) {
	return services.find((s) => s.slug === slug)
}
