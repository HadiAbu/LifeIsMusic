# LifeIsMusic 🎵

[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build-yellow)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Design-38B2AC)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

A modern React-based music streaming web app (inspired by Spotify) featuring playback, search, lyrics, discovery, and charts — built for a smooth, responsive experience.

---

## 📖 Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Configuration & Environment Variables](#configuration--environment-variables)
* [Project Structure](#project-structure)
* [Usage](#usage--screenshots)
* [Contributing](#contributing)
* [License](#license)
* [Acknowledgments](#acknowledgments)

---

## 🔎 About

**LifeIsMusic** is a showcase music app that blends modern web technologies with music APIs to deliver a seamless, engaging experience.
It allows users to search for tracks, stream music, read lyrics, and explore trending songs globally or locally.

---

## ✨ Features

* 🔍 **Search** songs, artists, and albums
* ▶️ **Playback controls** (play, pause, next, previous, seek)
* 📖 **Lyrics display** (when available)
* 🌎 **Global & local charts** for trending tracks
* 🎶 **Explore by genre / discovery sections**
* 📱 **Responsive UI** across desktop and mobile
* 🎨 **Modern design** powered by TailwindCSS

---

## 🛠 Tech Stack

| Layer            | Technology                               |
| ---------------- | ---------------------------------------- |
| Frontend         | [React](https://react.dev/) (with hooks) |
| Build tool       | [Vite](https://vitejs.dev/)              |
| Styling          | [Tailwind CSS](https://tailwindcss.com/) |
| Post-processing  | PostCSS                                  |
| Linting / Format | ESLint                                   |
| Package Manager  | npm / Yarn                               |

---

## 🚀 Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/) (v16+)
* npm or Yarn
* API keys (if required for music/lyrics services)

### Installation

```bash
git clone https://github.com/HadiAbu/LifeIsMusic.git
cd LifeIsMusic
npm install
# or
yarn install
```

### Running Locally

```bash
npm run dev
# or
yarn dev
```

The app will be available at:
👉 `http://localhost:5173` (Vite default)

### Build for Production

```bash
npm run build
npm run preview
```

---

## ⚙️ Configuration & Environment Variables

Set up your environment variables in a `.env` file:

```env
VITE_API_KEY=your_music_api_key
VITE_API_BASE_URL=https://api.example.com
```

---

## 📂 Project Structure

```
.
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   ├── pages/           # Page-level views
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Helpers / API clients
│   ├── assets/          # Images / styles
│   └── App.jsx
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

---

## 📸 Usage & Screenshots

> Add screenshots or GIFs of the app in action here.

Example workflow:

1. Open homepage → browse featured tracks
2. Search for a song/artist → start playback
3. View synced lyrics while listening
4. Explore local/global charts

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add feature: YourFeature"`
4. Push to your fork: `git push origin feature/YourFeature`
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**.
See [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

* Inspiration: [Spotify](https://spotify.com) & modern music streaming apps
* UI powered by [TailwindCSS](https://tailwindcss.com/)
* Music & lyrics data via external APIs (e.g. Shazam, Genius, etc.)
