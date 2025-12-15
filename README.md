<a href="https://www.toite.ee/" target="_blank" rel="noopener">
  <img src="https://raw.githubusercontent.com/Toite-app/backend/refs/heads/main/docs/logo.png" alt="Toite Logo" width="150">
</a>

## Restaurant Management Internal Frontend

A modern, responsive internal dashboard for restaurant management built with Next.js

<a href="https://github.com/Toite-app/internal-frontend/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Toite-app/internal-frontend" alt="License"/></a>
<a href="https://github.com/Toite-app/internal-frontend/commits/main"><img src="https://img.shields.io/github/last-commit/Toite-app/internal-frontend" alt="Last Commit"/></a>
<a href="https://sonarcloud.io/summary/new_code?id=Toite-app_internal-frontend"><img src="https://sonarcloud.io/api/project_badges/measure?project=Toite-app_internal-frontend&metric=security_rating" alt="Security Rating"/></a>
<a href="https://sonarcloud.io/summary/new_code?id=Toite-app_internal-frontend"><img src="https://sonarcloud.io/api/project_badges/measure?project=Toite-app_internal-frontend&metric=sqale_rating" alt="Maintainability Rating"/></a>
<a href="https://sonarcloud.io/summary/new_code?id=Toite-app_internal-frontend"><img src="https://sonarcloud.io/api/project_badges/measure?project=Toite-app_internal-frontend&metric=bugs" alt="Bugs"/></a>
<a href="https://hub.docker.com/r/toite/internal-frontend"><img src="https://img.shields.io/docker/pulls/toite/internal-frontend" alt="Docker Pulls"/></a>

---

## 🥔 Live Demo

See live demo with seed data on <https://demo.toite.ee/>. Use Credentials:

- **Username:** `admin`
- **Password:** `123456`

<a href="https://demo.toite.ee/">
  <img src="https://raw.githubusercontent.com/Toite-app/backend/refs/heads/main/docs/frontend-dispatcher.png" alt="Frontend Dashboard" width="800">
</a>

All data are shared across everyone but don't worry, I will integrate something better in future.

---

## ⭐ Features

- **Restaurant Management** - Create and manage multiple restaurants with customizable settings
- **Worker/Staff Management** - Handle employees, roles, and permissions
- **Order Management** - Real-time order processing with WebSocket support
- **Menu & Dish Management** - Flexible menu system with categories, modifiers, and pricing
- **Guest Management** - Track and manage customer information
- **Workshift Management** - Schedule and track employee shifts and payments
- **Discount System** - Configurable discounts and promotions
- **Multi-language Support** - Internationalization (i18n) ready
- **File Storage** - S3-compatible file uploads and management

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16.0.0 or higher
- Yarn 1.19.1 or higher

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Toite-app/internal-frontend.git
cd internal-frontend
```

2. Install dependencies:

```bash
yarn install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:3035`

---

## 🔧 Environment Variables

| Variable                 | Description               | Default                 |
| ------------------------ | ------------------------- | ----------------------- |
| `NEXT_PUBLIC_API_URL`    | Backend API URL           | `http://localhost:6701` |
| `NEXT_PUBLIC_SOCKET_URL` | WebSocket connection path | `/api`                  |

Create a `.env.local` file in the root directory with your configuration:

```env
NEXT_PUBLIC_API_URL=http://localhost:6701
NEXT_PUBLIC_SOCKET_URL=/api
```

---

## 🐳 Docker

### Build the image

```bash
docker build -t toite-internal-frontend .
```

### Run the container

```bash
docker run -p 3035:3035 \
  -e NEXT_PUBLIC_API_URL=http://your-backend-url:6701 \
  -e NEXT_PUBLIC_SOCKET_URL=/api \
  toite-internal-frontend
```

> **Note:** Environment variables prefixed with `NEXT_PUBLIC_` are embedded at build time in Next.js. If you need different values for production, you should set them as build arguments:

```bash
docker build \
  --build-arg NEXT_PUBLIC_API_URL=https://api.yourdomain.com \
  --build-arg NEXT_PUBLIC_SOCKET_URL=/api \
  -t toite-internal-frontend .
```

---

## 📜 Available Scripts

| Command      | Description                           |
| ------------ | ------------------------------------- |
| `yarn dev`   | Start development server on port 3035 |
| `yarn build` | Build for production                  |
| `yarn start` | Start production server               |
| `yarn lint`  | Run ESLint                            |

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
