import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/services/:slug" element={<ServiceDetail />} />
			<Route path="/projects/:slug" element={<ProjectDetail />} />
		</Routes>
	)
}

export default App
