export const projects = [
	{
		slug: 'fintech-mobile-app',
		title: 'FinTech Mobile App',
		stack: ['React Native', 'Node.js', 'MongoDB'],
		description: 'A secure, user-friendly mobile banking experience with real-time transactions and insights.',
		githubUrl: 'https://github.com/yourusername/fintech-mobile-app',
		highlights: ['Biometric auth', 'Instant transfers', 'Spending analytics', 'Push notifications'],
	},
	{
		slug: 'ecommerce-platform',
		title: 'E-Commerce Platform',
		stack: ['React', 'Tailwind', 'Stripe'],
		description: 'A scalable storefront with optimized checkout and headless CMS integrations.',
		githubUrl: 'https://github.com/yourusername/ecommerce-platform',
		highlights: ['Headless CMS', 'Stripe payments', 'Search & filters', 'Responsive UI'],
	},
	{
		slug: 'healthcare-dashboard',
		title: 'Healthcare Dashboard',
		stack: ['Next.js', 'TypeScript', 'Charts'],
		description: 'Clinician-facing analytics with real-time metrics and robust access controls.',
		githubUrl: 'https://github.com/yourusername/healthcare-dashboard',
		highlights: ['Role-based access', 'Charting', 'Export & audit logs', 'HIPAA-conscious UX'],
	},
	{
		slug: 'social-media-app',
		title: 'Social Media App',
		stack: ['Flutter', 'Firebase', 'Cloud Functions'],
		description: 'A delightful social app with realtime feeds and media uploads.',
		githubUrl: 'https://github.com/yourusername/social-media-app',
		highlights: ['Realtime feed', 'Media uploads', 'Notifications', 'Theming'],
	},
	{
		slug: 'real-estate-portal',
		title: 'Real Estate Portal',
		stack: ['React', 'Maps API', 'PostgreSQL'],
		description: 'Property discovery with advanced mapping, filters, and saved searches.',
		githubUrl: 'https://github.com/yourusername/real-estate-portal',
		highlights: ['Map clustering', 'Geo search', 'Saved alerts', 'Agent dashboards'],
	},
	{
		slug: 'food-delivery-app',
		title: 'Food Delivery App',
		stack: ['React Native', 'Redux', 'Express'],
		description: 'Multi-restaurant ordering with live order tracking and ratings.',
		githubUrl: 'https://github.com/yourusername/food-delivery-app',
		highlights: ['Live tracking', 'Cart & coupons', 'Reviews', 'Driver assignment'],
	},
]

export function getProjectBySlug(slug) {
	return projects.find((p) => p.slug === slug)
}
