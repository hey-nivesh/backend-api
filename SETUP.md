# 🔧 Backend Setup Guide - Achimpa.ai

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the backend-api directory:

```bash
# Copy the example file
cp env.example .env.local
```

Then edit `.env.local` and add your actual API key:
```env
GROQ_API_KEY=your_actual_groq_api_key_here
NODE_ENV=development
```

### 3. Start Development Server
```bash
npm run dev
```

The server will start on `http://localhost:3000` (or next available port).

## 🔑 Getting Your Groq API Key

1. Go to [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Copy the key and paste it in your `.env.local` file

## 🌐 Production Deployment

### Vercel Deployment
1. Push your code to GitHub (already done ✅)
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Import your GitHub repository
4. Add environment variables in Vercel:
   - `GROQ_API_KEY`: Your actual Groq API key
   - `NODE_ENV`: `production`

### Environment Variables in Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - **Name**: `GROQ_API_KEY`
   - **Value**: `your_actual_groq_api_key_here`
   - **Environment**: Production, Preview, Development

## 🔒 Security Notes

- ✅ **API keys are now secure** - No hardcoded keys in the code
- ✅ **Git history cleaned** - Previous commits with secrets removed
- ✅ **Environment variables** - Proper configuration management
- ✅ **GitHub protection** - Push protection enabled

## 🧪 Testing

Test your API endpoints:

```bash
# Health check
curl http://localhost:3000/api/groq?action=health

# Send a message
curl -X POST http://localhost:3000/api/groq \
  -H "Content-Type: application/json" \
  -d '{
    "message": "Hello!",
    "chatId": 1,
    "userName": "Test User"
  }'
```

## 📱 Frontend Integration

Update your React Native app's API configuration:

```javascript
// In Achimpa.ai/config/api.js
export const API_BASE_URL = 'http://localhost:3000/api';  // Local development
// export const API_BASE_URL = 'https://your-app.vercel.app/api';  // Production
```

## 🎉 Success!

Your backend is now:
- ✅ **Secure** - No exposed API keys
- ✅ **Deployed** - Available on GitHub
- ✅ **Production-ready** - Ready for Vercel deployment
- ✅ **Clean** - No sensitive data in git history

**Next Steps:**
1. Set up environment variables in Vercel
2. Deploy to production
3. Update your React Native app with the production URL
4. Test everything works end-to-end!
