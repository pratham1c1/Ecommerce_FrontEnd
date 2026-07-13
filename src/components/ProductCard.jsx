import { motion } from 'framer-motion'
import { FiArrowUpRight, FiStar } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const priceInRupees = (product.price * 83).toLocaleString('en-IN')
  return <motion.article className="product-card" whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}><div className="product-art" style={{ background: `radial-gradient(circle at 50% 40%, ${product.color}55, transparent 62%)` }}><span aria-hidden="true">{product.image}</span><small>{product.stock} in stock</small></div><div className="product-info"><p>{product.category}</p><h3>{product.name}</h3><div><span className="rating"><FiStar /> {product.rating}</span><strong>₹{priceInRupees}</strong></div><button aria-label={`Add ${product.name} to cart`}>Add to cart <FiArrowUpRight /></button></div></motion.article>
}
