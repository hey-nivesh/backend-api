#!/usr/bin/env node

/**
 * Achimpa.ai Backend Environment Setup Script
 * This script helps you set up environment variables for local development
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔧 Achimpa.ai Backend Environment Setup');
console.log('=====================================\n');

// Check if .env.local already exists
const envPath = path.join(__dirname, '.env.local');
const envExamplePath = path.join(__dirname, 'env.example');

if (fs.existsSync(envPath)) {
  console.log('⚠️  .env.local already exists!');
  rl.question('Do you want to overwrite it? (y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
      setupEnvironment();
    } else {
      console.log('Setup cancelled.');
      rl.close();
    }
  });
} else {
  setupEnvironment();
}

function setupEnvironment() {
  console.log('\n📝 Setting up environment variables...\n');
  
  rl.question('Enter your Groq API Key: ', (apiKey) => {
    if (!apiKey || apiKey.trim() === '') {
      console.log('❌ API key is required!');
      rl.close();
      return;
    }
    
    // Validate API key format (basic check)
    if (!apiKey.startsWith('gsk_')) {
      console.log('⚠️  Warning: Groq API keys usually start with "gsk_"');
      rl.question('Continue anyway? (y/N): ', (continueAnswer) => {
        if (continueAnswer.toLowerCase() === 'y' || continueAnswer.toLowerCase() === 'yes') {
          createEnvFile(apiKey);
        } else {
          console.log('Setup cancelled.');
          rl.close();
        }
      });
    } else {
      createEnvFile(apiKey);
    }
  });
}

function createEnvFile(apiKey) {
  const envContent = `# Achimpa.ai Backend Environment Variables
# Generated on ${new Date().toISOString()}

# Groq API Configuration
GROQ_API_KEY=${apiKey}

# Node Environment
NODE_ENV=development

# Optional: Custom Port (default is 3000)
# PORT=3000
`;

  try {
    fs.writeFileSync(envPath, envContent);
    console.log('\n✅ Environment file created successfully!');
    console.log('📁 Location: .env.local');
    console.log('\n🚀 Next steps:');
    console.log('1. Run: npm run dev');
    console.log('2. Test: curl http://localhost:3000/api/groq?action=health');
    console.log('\n🔒 Security: Your API key is now stored locally and will not be committed to git.');
  } catch (error) {
    console.error('❌ Error creating .env.local file:', error.message);
  }
  
  rl.close();
}

// Handle Ctrl+C
rl.on('SIGINT', () => {
  console.log('\n\nSetup cancelled.');
  rl.close();
});
