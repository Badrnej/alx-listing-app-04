# ALX Listing App 04 - API Integration

This is a Next.js application that integrates with REST APIs for dynamic data fetching in an Airbnb clone.

## Features

- **Property Listing Page**: Dynamically fetches and displays properties from API
- **Property Detail Page**: Shows detailed property information based on dynamic routing
- **Booking System**: Handles form submission to API with validation
- **Reviews Integration**: Fetches and displays property reviews
- **Loading States**: Proper loading indicators for all API calls
- **Error Handling**: Comprehensive error handling for failed API requests

## Technology Stack

- **Next.js** - React framework with server-side rendering
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Axios** - HTTP client for API requests
- **React Hooks** - useState, useEffect for state management

## API Endpoints

The application integrates with the following API endpoints:

- `GET /api/properties` - Fetches list of properties
- `GET /api/properties/:id` - Fetches single property details
- `GET /api/properties/:id/reviews` - Fetches property reviews
- `POST /api/bookings` - Submits booking form data

## Project Structure

```
├── pages/
│   ├── api/          # API routes (mock endpoints)
│   ├── property/     # Property-related pages
│   ├── booking/      # Booking page
│   └── index.tsx     # Home page with property listings
├── components/
│   └── property/     # Property-related components
├── types/
│   └── index.ts      # TypeScript type definitions
└── styles/
    └── globals.css   # Global styles
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Features Implemented

### 1. Property Listing with API Integration
- Fetches properties dynamically from `/api/properties`
- Loading states and error handling
- Responsive grid layout
- Property cards with images and ratings

### 2. Dynamic Property Details
- Uses Next.js dynamic routing (`[id].tsx`)
- Fetches property data based on URL parameter
- Displays property images, amenities, and description
- Integrated review section

### 3. Booking Form with API Submission
- Complete booking form with validation
- Submits data to `/api/bookings` endpoint
- Loading states during submission
- Success and error message handling

### 4. Reviews System
- Fetches reviews from `/api/properties/:id/reviews`
- Displays user ratings and comments
- Loading placeholders during fetch

## API Integration Details

All components implement proper:
- **Loading States**: Skeleton screens and spinners
- **Error Handling**: User-friendly error messages
- **Type Safety**: TypeScript interfaces for all data structures
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Mock Data

The application includes mock API endpoints that simulate real backend responses:
- Property listings with images, descriptions, and amenities
- User reviews with ratings and timestamps
- Booking confirmation system

This setup allows for easy integration with real APIs by simply changing the endpoint URLs.
