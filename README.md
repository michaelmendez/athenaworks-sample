# Athenaworks Homepage Clone

A modern, responsive implementation of the Athenaworks homepage built with React, TypeScript, and Ant Design.

## Features

- **Responsive Design**: Mobile-first approach with tablet and desktop breakpoints
- **Modern Tech Stack**: React 19, TypeScript 5.9, Ant Design 5
- **Type Safety**: Strict TypeScript configuration with full type coverage
- **Component Architecture**: Reusable components with CSS Modules
- **Error Handling**: Error boundary implementation for graceful failures
- **Testing**: Unit tests with Vitest and React Testing Library

## Tech Stack

- **React 19.1.1** - Latest React with concurrent features
- **TypeScript 5.9** - Strict type checking
- **Ant Design 5.28** - UI component library
- **Font Awesome** - Icon library for social media icons
- **Vite** - Fast build tool and dev server
- **Vitest** - Unit testing framework
- **pnpm** - Fast, efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/        # React components
│   ├── Banner/       # Reusable banner component
│   ├── BrandLogos/   # Logo carousel section
│   ├── ErrorBoundary/# Error boundary wrapper
│   ├── Footer/       # Footer with navigation
│   ├── Header/       # Header with menu
│   └── HeroBanner/   # Hero section
├── constants/        # App constants and navigation data
├── types/            # TypeScript type definitions
└── assets/           # Static assets (images, icons)
```

## Key Components

- **ErrorBoundary**: Catches and handles component errors gracefully
- **Header**: Responsive navigation with mobile drawer
- **Banner**: Reusable announcement/CTA banner component
- **Footer**: Comprehensive footer with multiple navigation sections

## Development

The project uses:
- CSS Modules for component-scoped styling
- TypeScript for type safety
- ESLint for code quality
- Strict mode enabled for better error catching

## License

Private project for demonstration purposes.
