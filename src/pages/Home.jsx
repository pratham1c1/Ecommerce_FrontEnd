import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiBox,
  FiCreditCard,
  FiDatabase,
  FiLayers,
  FiLock,
  FiZap,
} from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import { categories, products, stats } from "../mock/data";
import { USE_MOCK } from "../config/config";

const features = [
  {
    icon: <FiZap />,
    title: "Instant discovery",
    text: "Service-aware commerce designed around fast, dependable interactions.",
  },
  {
    icon: <FiLayers />,
    title: "Independent by design",
    text: "Focused services can evolve, deploy, and scale on their own cadence.",
  },
  {
    icon: <FiLock />,
    title: "Resilient flows",
    text: "A clear foundation for transactional ecommerce journeys.",
  },
];
const architecture = [
  { name: "Customer", icon: "◉" },
  { name: "Gateway", icon: "⌘" },
  { name: "User Service", icon: "U" },
  { name: "Product Service", icon: "P" },
  { name: "Order Service", icon: "O" },
  { name: "Payment Service", icon: "$" },
  { name: "Eureka Discovery", icon: "✦" },
];

export default function Home() {
  const showArchitecture = () =>
    document
      .getElementById("architecture")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  const [featuredIndex, setFeaturedIndex] = useState(2);
  const lastWheelAt = useRef(0);
  const featuredProducts = products.slice(0, 5);
  const moveFeature = (direction) => setFeaturedIndex((current) => (current + direction + featuredProducts.length) % featuredProducts.length);
  const handleSpotlightWheel = (event) => {
    event.preventDefault();
    const now = Date.now();
    if (now - lastWheelAt.current < 380) return;
    lastWheelAt.current = now;
    moveFeature(event.deltaY > 0 ? 1 : -1);
  };
  return (
    <main>
      <section className="hero">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="eyebrow">PC Commerce,</p>
            <h1>
              Modern ecommerce,
              <br />
              <em>orchestrated.</em>
            </h1>
            <p className="hero-text">
              A polished storefront powered by an independently scalable Spring
              Boot microservices architecture.
            </p>
            <div className="hero-actions">
              <Link className="button primary" to="/store">
                View demo <FiArrowUpRight />
              </Link>
              <button className="button ghost" onClick={showArchitecture}>
                Explore architecture <FiArrowDown />
              </button>
            </div>
            <p className="status-dot">
              <i /> {USE_MOCK ? "Mock mode active" : "Live backend mode active"}
            </p>
          </motion.div>
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.75 }}
          >
            <div className="hero-product">🛍️</div>
            <div className="float-card card-top">
              <FiZap />{" "}
              <span>
                <b>42ms</b> response time
              </span>
            </div>
            <div className="float-card card-bottom">
              <FiBox />{" "}
              <span>
                <b>5 services</b> in sync
              </span>
            </div>
            <div className="hero-ring ring-a" />
            <div className="hero-ring ring-b" />
          </motion.div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="The foundation"
          title="Built to feel effortless."
          text="The experience stays simple on the surface while focused services handle the complexity beneath."
        />
        <div className="feature-grid">
          {features.map((item, i) => (
            <motion.article
              className="feature-card"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>
      <section className="section showcase">
        <div className="split-heading">
          <SectionTitle
            eyebrow="Selected collection"
            title="Objects with a point of view."
          />
          <Link to="/store" className="text-link">
            Browse all products <FiArrowUpRight />
          </Link>
        </div>
        <p className="spotlight-hint">Use your scroll wheel or the side controls to explore the collection.</p>
        <div className="product-spotlight" aria-label="Interactive featured product collection" onWheel={handleSpotlightWheel}>
          <button className="spotlight-control previous" onClick={() => moveFeature(-1)} aria-label="Show previous product"><FiArrowLeft /></button>
          <button className="spotlight-control next" onClick={() => moveFeature(1)} aria-label="Show next product"><FiArrowRight /></button>
          {featuredProducts.map((product, index) => {
            const offset = index - featuredIndex;
            const wrappedOffset = offset > 2 ? offset - featuredProducts.length : offset < -2 ? offset + featuredProducts.length : offset;
            const isActive = index === featuredIndex;
            const priceInRupees = (product.price * 83).toLocaleString("en-IN");
            return <motion.button key={product.id} className={`spotlight-card ${isActive ? "active" : ""}`} onClick={() => setFeaturedIndex(index)} animate={{ x: `${wrappedOffset * 58}%`, scale: isActive ? 1 : 0.78, opacity: isActive ? 1 : Math.abs(wrappedOffset) === 1 ? 0.52 : 0.2, zIndex: isActive ? 5 : 3 - Math.abs(wrappedOffset) }} transition={{ type: "spring", stiffness: 155, damping: 24, mass: 1.15 }} aria-label={`Focus ${product.name}`}><span className="spotlight-art" style={{ background: `radial-gradient(circle, ${product.color}60, transparent 68%)` }}>{product.image}</span><span className="spotlight-meta"><small>{product.category}</small><b>{product.name}</b><strong>₹{priceInRupees}</strong></span></motion.button>;
          })}
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="Find your next favorite"
          title="A world in every category."
        />
        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to={`/store?category=${category.name}`}
              className={`category-card ${category.tone}`}
              key={category.name}
            >
              <span>
                {category.icon === "headphones"
                  ? "🎧"
                  : category.icon === "watch"
                    ? "⌚"
                    : category.icon === "desktop"
                      ? "🖥️"
                      : "📷"}
              </span>
              <div>
                <h3>{category.name}</h3>
                <p>{category.count} curated items</p>
              </div>
              <FiArrowUpRight />
            </Link>
          ))}
        </div>
      </section>
      <section id="architecture" className="section architecture">
        <SectionTitle
          eyebrow="Under the hood"
          title="A request is a conversation."
          text="Each operation follows a deliberate path between small, independently owned capabilities."
        />
        <div className="architecture-map">
          {architecture.map((node, i) => (
            <div className="arch-wrap" key={node.name}>
              <motion.div
                className={`arch-node ${i === 6 ? "discovery" : ""}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span>{node.icon}</span>
                <b>{node.name}</b>
              </motion.div>
              {i < architecture.length - 1 && (
                <div className="flow-line">
                  <i />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="arch-note">
          <FiDatabase /> Database-per-service keeps data ownership explicit.{" "}
          <FiCreditCard /> Payment is simulated in the current backend.
        </div>
      </section>
      <section className="stats-section">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>
      <section className="section about">
        <div>
          <p className="eyebrow">Made by PCthings</p>
          <h2>
            Small services. <em>Big momentum.</em>
          </h2>
        </div>
        <p>
          This project turns a working microservices backend into a
          portfolio-grade product surface: accessible, responsive, and
          deployable to GitHub Pages without a running server.
        </p>
        <a
          href="http://www.linkedin.com/in/prathamesh-chandekar/"
          className="text-link"
        >
          Start a conversation <FiArrowUpRight />
        </a>
      </section>
    </main>
  );
}
