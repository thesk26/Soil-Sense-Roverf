# Deploying to Vercel

This project is configured to deploy on Vercel. Follow these steps:

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Your project pushed to GitHub (already done ✅)

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository: `thesk26/Soil-Sense-Roverf`
3. Vercel will automatically detect the configuration:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/public`
   - **Install Command**: `npm install`
4. Click **Deploy**
5. Wait for the build to complete
6. Your app will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

## Environment Variables

If you need to set environment variables (like database URLs, API keys, etc.):

1. Go to your project settings on Vercel
2. Navigate to **Environment Variables**
3. Add your variables
4. Redeploy the application

## API Routes

API routes are handled by the serverless function in `api/index.js`. Currently, it returns a basic response. You can extend it to handle your Express routes.

## Build Configuration

- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Node Version**: Vercel will use Node.js 18.x by default

## Notes

- The React app is built and served as static files
- API routes (`/api/*`) are handled by serverless functions
- WebSocket connections are not supported in Vercel's serverless functions (if you need WebSockets, consider using a different hosting solution)

