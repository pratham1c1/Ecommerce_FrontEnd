import { motion } from 'framer-motion'
export default function SectionTitle({ eyebrow, title, text }) { return <motion.div className="section-title" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}</motion.div> }
