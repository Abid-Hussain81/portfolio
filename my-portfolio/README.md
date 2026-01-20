# Full-Stack Portfolio

A professional portfolio website built with Next.js, MongoDB, and Tailwind CSS.

## Features

- **Dynamic Projects**: Projects fetched from MongoDB database
- **Contact Form**: Functional contact form with database storage
- **Responsive Design**: Mobile-first responsive layout
- **API Routes**: RESTful API endpoints for projects and contact
- **Modern UI**: Clean, professional design with Tailwind CSS

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel-ready

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create `.env.local` file:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NEXT_PUBLIC_API_URL=http://localhost:3000
   ```

3. **Start MongoDB**
   Make sure MongoDB is running locally or use MongoDB Atlas

4. **Seed Database** (Optional)
   ```bash
   node scripts/seed.js
   ```

5. **Run Development Server**
   ```bash
   npm run dev
   ```

## API Endpoints

- `GET /api/projects` - Fetch featured projects
- `POST /api/projects` - Create new project
- `POST /api/contact` - Submit contact form

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── projects/route.js
│   │   └── contact/route.js
│   └── page.js
├── components/
│   └── ContactForm.js
├── lib/
│   └── mongodb.js
└── models/
    ├── Project.js
    └── Contact.js
```

## Customization

1. Update personal information in `src/app/page.js`
2. Modify skills array to match your expertise
3. Add real projects via API or database
4. Customize styling in Tailwind classes