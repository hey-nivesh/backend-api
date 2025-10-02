import { NextResponse } from 'next/server';

// API endpoint for chat application using App Router
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const chatId = searchParams.get('chatId');
    
    // Sample chat responses based on chatId
    const chatResponses = {
      1: { // Nivja
        name: 'Nivja',
        greeting: 'Hello! I\'m Nivja, your friendly AI assistant! 🌟',
        personality: 'cheerful and helpful',
        color: '#FFC107'
      },
      2: { // Asti
        name: 'Asti',
        greeting: 'Hi there! Asti here, ready to help you out! 💫',
        personality: 'energetic and creative',
        color: '#E53057'
      },
      3: { // Tahsu
        name: 'Tahsu',
        greeting: 'Greetings! I\'m Tahsu, your wise companion! 🧠',
        personality: 'thoughtful and analytical',
        color: '#3B96D2'
      },
      4: { // Adi
        name: 'Adi',
        greeting: 'Hey! Adi at your service! 🚀',
        personality: 'professional and efficient',
        color: '#37474F'
      },
      5: { // Anim
        name: 'Anim',
        greeting: 'Welcome! I\'m Anim, let\'s have some fun! 🎉',
        personality: 'playful and imaginative',
        color: '#2473FE'
      }
    };

    if (chatId && chatResponses[chatId]) {
      return NextResponse.json({
        success: true,
        data: {
          ...chatResponses[chatId],
          timestamp: new Date().toISOString(),
          apiVersion: '1.0.0'
        }
      });
    } else if (name) {
      return NextResponse.json({
        success: true,
        data: {
          message: `Hello ${name}! Welcome to Achimpa.ai!`,
          timestamp: new Date().toISOString(),
          apiVersion: '1.0.0'
        }
      });
    } else {
      return NextResponse.json({
        success: true,
        data: {
          message: 'Welcome to Achimpa.ai API!',
          developer: 'Nivesh Jain',
          description: 'Chat application backend API',
          endpoints: {
            'GET /api/hello': 'Get welcome message',
            'GET /api/hello?chatId=1': 'Get specific chat buddy info',
            'GET /api/hello?name=YourName': 'Get personalized greeting',
            'POST /api/hello': 'Send chat message'
          },
          timestamp: new Date().toISOString(),
          apiVersion: '1.0.0'
        }
      });
    }
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal Server Error',
        message: 'Something went wrong on the server'
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, chatId, userName } = body;
    
    if (!message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Bad Request',
          message: 'Message is required'
        },
        { status: 400 }
      );
    }

    // Simple chat response logic
    const responses = [
      "That's interesting! Tell me more about that.",
      "I understand what you're saying. How can I help?",
      "Thanks for sharing that with me!",
      "That's a great point! What do you think about...",
      "I'm here to help! What would you like to know?",
      "Fascinating! I'd love to learn more about your perspective.",
      "That makes sense! Is there anything specific you'd like assistance with?"
    ];

    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return NextResponse.json({
      success: true,
      data: {
        userMessage: message,
        botResponse: randomResponse,
        chatId: chatId || 1,
        userName: userName || 'User',
        timestamp: new Date().toISOString(),
        messageId: Math.random().toString(36).substr(2, 9)
      }
    });
  } catch (error) {
    console.error('POST API Error:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal Server Error',
        message: 'Something went wrong processing your request'
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
