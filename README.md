# PCthings — Ecommerce Microservices Frontend

A React + Vite storefront and architecture showcase for the Spring Boot ecommerce microservices project. It is designed to work on GitHub Pages without a backend by default.

## Start locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

## Mock and live modes

The single switch is in `src/config/config.js`:

```js
export const USE_MOCK = true
```

`true` uses the bundled product data and works without any server. Set it to `false` to call the services at these default URLs:

| Service | URL |
| --- | --- |
| Users | `http://localhost:8081` |
| Products | `http://localhost:8082` |
| Orders / Payments | `http://localhost:8080` |

For live mode, enable CORS in each Spring Boot service for the Vite development origin (normally `http://localhost:5173`) and your deployed Pages origin.

## Project layout

- `src/components` — reusable UI pieces
- `src/pages` — Home, Store, and API Console routes
- `src/mock` — realistic data used in mock mode
- `src/services` — backend-aware request functions
- `src/config` — the one-file environment switch and service URLs
- `src/styles` — responsive design system and animations

## GitHub Pages deployment

The app uses `HashRouter` and Vite’s relative `base: './'`, which avoid refresh and asset-path issues on GitHub Pages.

1. Push this folder to GitHub.
2. Run `npm install && npm run build`.
3. Publish the generated `dist` directory using GitHub Actions or a Pages deployment action.

Before deploying with live mode, replace the localhost addresses in `src/config/config.js` with public HTTPS API URLs.

## Backend architecture

The accompanying [Ecommerce Microservices backend](https://github.com/pratham1c1/Ecommerce_Microservices) is a Spring Boot migration from a monolith to User, Product, Order, and Payment services. It uses Eureka service discovery, OpenFeign communication, an API Gateway with JWT authentication, Apache Kafka event messaging, SLF4j logging, and JUnit/Mockito test suites with SonarCloud quality checks.

The frontend’s data-mode details are intentionally kept here rather than presented in the UI: mock mode is ideal for GitHub Pages; live mode needs publicly reachable services and CORS configured for the frontend origin.
