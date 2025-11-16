# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
🏏 Fantasy Sports App – React

A fully functional Fantasy Cricket Web App built using React, Context API, React Router, and Vite.
Users can pick players, create teams, assign Captain & Vice-Captain, and manage teams with credit rules and validations.
🚀 Features
🔹 Match Flow

View upcoming matches

Select a match to begin team creation

Pick players from both teams

Credits system (100 max)

Role-based filtering (WK, BAT, AR, BOWL)

🔹 Player Selection

Add or remove players

Prevent duplicate players

Maximum 11 players allowed

Live credit calculation

Real-time validation with custom hook

🔹 Team Creation

Choose Captain (2x points)

Choose Vice-Captain (1.5x points)

Save multiple teams

Unique team IDs with UUID

🔹 UI Components

Player cards

Role filter chips

Clean, responsive layout

🏗️ Tech Stack
Technology	Purpose
React + Vite	Frontend UI
React Router DOM	Routing
Context API	Global state management
UUID	Unique team IDs
Custom Hooks	Team validation
Axios / Fetch	Player API calls
