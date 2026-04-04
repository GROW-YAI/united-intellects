# United Intellects

## Project Overview
United Intellects is a modern web application focused on [biodiversity protection, investments, testimonials, features, about, contact]. The site features a welcoming hero section, benefits showcase, investment opportunities, chat functionality (backend with Node.js), and user testimonials. Key technologies:
- Frontend: React with Vite build tool, Tailwind CSS, TypeScript
- Backend: Node.js Express server with chat functionality (chatServer.js)
- Database: Custom db.js (likely MongoDB/SQL)
- Accessibility: Integrated Boafo accessibility widget for WCAG compliance, screen reader support, keyboard navigation, making the site accessible to all users including those with disabilities.
- Deployment-ready for Vercel (vercel.json)

Purpose: Educate users on biodiversity conservation while providing investment opportunities and interactive features.

## How to Get Your Boafo API Key
1. Visit https://boafo.co
2. Register/login to dashboard
3. Generate your API key from the dashboard
4. Copy it for use in .env

## How to Integrate the Boafo Widget
Follow the official guide: https://drive.google.com/file/d/1tvwK-sBZI2a4uldd6z5LD1iLblSl3WbG/view?usp=sharing

## Setup Instructions
1. Clone the repo: `git clone <repo-url>`
2. Install dependencies: `npm install`
3. Copy .env.example to .env: `cp .env.example .env`
4. Add your Boafo key: Edit .env, set `VITE_BOAFO_API_KEY=pk_your_real_key_here`
5. Run dev server: `npm run dev`
6. Open http://localhost:3000
7. Backend: `cd backend && npm install && node server.js` (port 5000)

**Note:** Replace placeholder in .env with real key from boafo.co. Widget auto-inits in BoafoWidgetInitializer.tsx."

