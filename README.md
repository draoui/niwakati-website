# Ni Wakati ASBL Website

This is a modern, responsive web application for Ni Wakati ASBL, an organization dedicated to promoting diversity and inclusion.

## Features

- Home page with banner, mission statement, activities, testimonials, and call to action
- About page with mission, values, and team information
- Activities page showcasing programs and initiatives
- Events page with upcoming and past events
- Get Involved page with volunteering, donation, and partnership options
- Contact page with form and organization information
- Dashboard for monitoring organization activities and performance
- Newsletter signup in footer
- Database integration using Prisma for storing events, activities, testimonials, etc.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Prisma ORM for database management
- Chart.js for data visualization

## Getting Started

### Prerequisites

- Node.js 18 or later
- PostgreSQL database

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory with the following content:
```
DATABASE_URL="postgresql://username:password@localhost:5432/niwakati"
```
Replace `username`, `password`, and database name as needed.

4. Initialize the database:
```bash
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Next.js app router pages and API routes
- `/components`: Reusable React components
- `/prisma`: Prisma schema and database configuration
- `/public`: Static assets
- `/lib`: Utility functions and shared code

## Deployment

This application can be deployed to any platform that supports Next.js applications, such as Vercel, Netlify, or a custom server.

## License

This project is licensed under the MIT License.