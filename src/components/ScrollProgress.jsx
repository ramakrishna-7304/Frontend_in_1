import { useEffect, useState } from 'react'

export default function ScrollProgress() {
	const [progress, setProgress] = useState(0)
	useEffect(() => {
		const onScroll = () => {
			const h = document.documentElement
			const scrolled = h.scrollTop
			const height = h.scrollHeight - h.clientHeight
			setProgress(height ? (scrolled / height) * 100 : 0)
		}
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])
	return (
		<div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
			<div className="h-full bg-gradient-to-r from-primary to-secondary transition-[width] duration-150" style={{ width: `${progress}%` }} />
		</div>
	)
}
