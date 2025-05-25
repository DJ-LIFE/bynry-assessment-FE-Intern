# Bynry Assessment - Profile Management Application

A modern React application for managing user profiles with interactive maps, built with TypeScript, Vite, and Tailwind CSS.

🔗 **Live Demo**: [https://bynry-assessment.vercel.app/](https://bynry-assessment.vercel.app/)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Usage](#usage)
- [Scripts](#scripts)
- [Contributing](#contributing)

## ✨ Features

- **Profile Management**: View, add, edit, and delete user profiles
- **Interactive Maps**: Leaflet integration for location visualization
- **Search Functionality**: Real-time profile search by name
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Admin Panel**: Full CRUD operations for profile management
- **Modern UI**: Clean and intuitive user interface
- **TypeScript**: Full type safety throughout the application

## 🛠 Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.7
- **Maps**: Leaflet & React-Leaflet
- **Routing**: React Router 7.6.0
- **Linting**: ESLint with TypeScript support
- **Fonts**: Inter, Open Sans, Poppins

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bynry-assessment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
bynry-assessment/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── InputForm.tsx          # Form for adding/editing profiles
│   │   ├── Map.tsx                # Leaflet map component
│   │   ├── ProfileCard.tsx        # Individual profile card
│   │   └── SearchAndFilter.tsx    # Search functionality
│   ├── contexts/
│   │   └── ProfileContext.tsx     # Global state management
│   ├── data/
│   │   └── profiles.ts            # Initial profile data
│   ├── pages/
│   │   ├── AdminPanel.tsx         # Admin dashboard
│   │   ├── HomePage.tsx           # Main profile listing
│   │   └── ProfilePage.tsx        # Individual profile view
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # App entry point
│   └── index.css                  # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🧩 Components Overview

### Core Components

- **[`App`](src/App.tsx)**: Main application component with routing setup
- **[`HomePage`](src/pages/HomePage.tsx)**: Displays profile cards with search functionality
- **[`ProfilePage`](src/pages/ProfilePage.tsx)**: Individual profile details with map
- **[`AdminPanel`](src/pages/AdminPanel.tsx)**: Admin interface for CRUD operations

### UI Components

- **[`ProfileCard`](src/components/ProfileCard.tsx)**: Reusable profile card component
- **[`InputForm`](src/components/InputForm.tsx)**: Form for profile creation/editing
- **[`Map`](src/components/Map.tsx)**: Interactive map using Leaflet
- **[`SearchAndFilter`](src/components/SearchAndFilter.tsx)**: Search input component

### State Management

- **[`ProfileContext`](src/contexts/ProfileContext.tsx)**: React Context for global profile state

## 📖 Usage

### Viewing Profiles

1. Visit the home page to see all profiles
2. Use the search bar to filter profiles by name
3. Click "Summary" on any profile card to view its location on the map
4. Click on a profile card to view detailed information

### Managing Profiles (Admin)

1. Click the "Admin" button in the navigation
2. **Add New Profile**: Click "Add Profile" and fill out the form
3. **Edit Profile**: Click "Edit" next to any profile in the list
4. **Delete Profile**: Click "Delete" to remove a profile

### Profile Information

Each profile contains:
- Name and photo
- Description
- Geographic coordinates (latitude/longitude)
- Contact email
- Interests (tags)
- Interactive map location

## 📜 Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🔧 Configuration

### Path Aliases

The project uses path aliases for cleaner imports:
```typescript
"@/*": ["./src/*"]
```

### ESLint Configuration

Custom ESLint rules are configured in [`eslint.config.js`](eslint.config.js):
- TypeScript support
- React hooks rules
- Import organization
- No relative parent imports

### TypeScript Configuration

Multiple TypeScript configurations:
- [`tsconfig.app.json`](tsconfig.app.json): Main app configuration
- [`tsconfig.node.json`](tsconfig.node.json): Node.js tools configuration
- [`tsconfig.json`](tsconfig.json): Project references

## 🎨 Styling

The application uses Tailwind CSS with custom font configurations:
- **Inter**: Primary UI font
- **Open Sans**: Secondary text font  
- **Poppins**: Display font

Custom CSS classes are available in [`src/index.css`](src/index.css).

## 🗺️ Maps Integration

The application integrates Leaflet maps for location visualization:
- Interactive markers for each profile location
- Popup information on marker click
- Responsive map containers
- Custom map styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is part of a technical assessment and is available for educational purposes.

## 🚀 Deployment

The application is deployed on Vercel and automatically updates with each push to the main branch.

**Live URL**: [https://bynry-assessment.vercel.app/](https://bynry-assessment.vercel.app/)

---

Built with ❤️ using React, TypeScript, and modern web technologies.