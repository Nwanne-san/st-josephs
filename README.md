# St. Josephs Web Application

A Next.js web application with full-stack integration featuring MongoDB backend services.

## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), utilizing MongoDB for data persistence and modern web technologies for the frontend.

## Technology Stack

- **Frontend**: Next.js with TypeScript
- **Backend**: Node.js with MongoDB integration
- **Styling**: CSS
- **Font Optimization**: Uses `next/font` with Geist font family

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm/yarn/pnpm
- MongoDB (local instance or connection string)

### Installation

1. Install dependencies:

```shellscript
npm install
# or
yarn install
# or
pnpm install
```


2. Set up environment variables:
Create a `.env.local` file in the root directory and add the following:

```plaintext
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=your_api_url
```

3. Run the development server:

```shellscript
npm run dev
# or
yarn dev
# or
pnpm dev
```


4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Project Structure

```plaintext
st-josephs/
├── frontend/           # Frontend Next.js application
│   ├── components/     # Reusable UI components
│   ├── pages/         # Application pages
├── backend/           # Backend services and API
│   ├── controllers/   # Request handlers
│   ├── models/        # Database models
├── public/           # Static files
└── ...
```

### Features

### Implemented Features

- Full backend integration with MongoDB
- Services page with detailed information
- Profile page with dynamic functionality
- Responsive design across all devices
- Optimized font loading with next/font
- Custom UI components
- API integration
- Database operations


### Planned Features

- User authentication system
- Admin dashboard
- Content management system
- Analytics integration
- Performance optimization


## Development

### Code Style

- Follow TypeScript best practices
- Use ES6+ features
- Implement proper error handling
- Write clean, documented code


### Testing

```shellscript
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e
```

### Building for Production

```shellscript
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

The application can be deployed on various platforms:

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy


### Traditional Hosting

1. Build the application: `npm run build`
2. Start the server: `npm start`


## Performance Optimization

- Implements image optimization
- Uses code splitting
- Implements lazy loading
- Optimizes font loading
- Minimizes JavaScript bundles


## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)


## Troubleshooting

Common issues and solutions:

1. **MongoDB Connection Issues**

1. Check connection string
2. Verify network connectivity
3. Ensure proper authentication



2. **Build Errors**

1. Clear `.next` directory
2. Remove `node_modules` and reinstall
3. Update dependencies
