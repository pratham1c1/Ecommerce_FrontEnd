import { Link, NavLink } from 'react-router-dom'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Navbar() {
  return <header className="nav-shell"><nav className="nav" aria-label="Main navigation"><Link className="brand" to="/" aria-label="PCthings home"><img src="./assets/pcthings-logo.png" alt="PCthings" /> <span></span></Link><div className="nav-links"><NavLink to="/">Home</NavLink><NavLink to="/store">Store</NavLink><NavLink to="/dashboard">About Project</NavLink></div><Link className="nav-cta" to="/store">Open store <FiArrowUpRight /></Link></nav></header>
}
