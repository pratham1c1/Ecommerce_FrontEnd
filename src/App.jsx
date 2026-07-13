import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Store from './pages/Store'
import Dashboard from './pages/Dashboard'
function Footer() { return <footer><span>© 2026 Projects · PCthings</span><span>Built with React + Spring Boot microservices</span></footer> }
export default function App() { return <><Navbar /><Routes><Route path="/" element={<Home />} /><Route path="/store" element={<Store />} /><Route path="/dashboard" element={<Dashboard />} /></Routes><Footer /></> }
