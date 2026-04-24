# FlowCast 🌸

> Understand your rhythm. Work with your energy, not against it.

FlowCast is a cycle-aware productivity tool for college students. It predicts whether a given day is a **High Focus Day** or a **Rest-Oriented Day** based on cycle phase, sleep, stress, and symptom severity.

## Features

- **Prediction engine** — ML-inspired scoring model using cycle phase + behavioral inputs
- **Insights dashboard** — productivity trends by cycle phase + 28-day focus heatmap
- **Responsive design** — mobile-first with a hamburger nav drawer
- **4 pages** — Home, How it works, Try FlowCast, Insights, About

## Tech stack

- React 18 + React Router v6
- Chart.js + react-chartjs-2
- Vite (build tool)
- CSS Modules

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

Then open [http://localhost:5173](http://localhost:5173).

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx          # Sticky nav with mobile drawer
│   ├── Navbar.module.css
│   ├── Footer.jsx
│   └── Footer.module.css
├── pages/
│   ├── Home.jsx            # Landing + hero
│   ├── Home.module.css
│   ├── HowItWorks.jsx      # 3-step explainer
│   ├── HowItWorks.module.css
│   ├── Predict.jsx         # Core prediction feature
│   ├── Predict.module.css
│   ├── Insights.jsx        # Dashboard + charts
│   ├── Insights.module.css
│   ├── About.jsx           # Ethics + model info
│   └── About.module.css
├── hooks/
│   └── useFadeIn.js        # Intersection Observer scroll animation
├── App.jsx                 # Routes
├── main.jsx                # Entry point
└── index.css               # Global styles + CSS variables
```

## Disclaimer

FlowCast is a portfolio/research tool and **not medical advice**. All data is processed locally in the browser — nothing is stored or transmitted.
