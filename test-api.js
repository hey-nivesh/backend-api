// Simple test script to verify the API endpoints
const testAPI = async () => {
  const baseURL = 'http://localhost:3000';
  
  console.log('🚀 Testing Achimpa.ai API endpoints...\n');
  console.log('✅ Server is running on http://localhost:3000');
  console.log('✅ API endpoint: http://localhost:3000/api/hello');
  console.log('✅ Test page: http://localhost:3000/test.html\n');
  
  try {
    // Test 1: Basic GET request
    console.log('📡 Test 1: Basic GET /api/hello');
    const response1 = await fetch(`${baseURL}/api/hello`);
    const data1 = await response1.json();
    console.log('✅ Response:', JSON.stringify(data1, null, 2));
    console.log('');
    
    // Test 2: GET with name parameter
    console.log('📡 Test 2: GET /api/hello?name=Nivesh');
    const response2 = await fetch(`${baseURL}/api/hello?name=Nivesh`);
    const data2 = await response2.json();
    console.log('✅ Response:', JSON.stringify(data2, null, 2));
    console.log('');
    
    // Test 3: GET with chatId parameter
    console.log('📡 Test 3: GET /api/hello?chatId=1');
    const response3 = await fetch(`${baseURL}/api/hello?chatId=1`);
    const data3 = await response3.json();
    console.log('✅ Response:', JSON.stringify(data3, null, 2));
    console.log('');
    
    // Test 4: POST request
    console.log('📡 Test 4: POST /api/hello');
    const response4 = await fetch(`${baseURL}/api/hello`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello from test script!',
        chatId: 1,
        userName: 'Tester'
      })
    });
    const data4 = await response4.json();
    console.log('✅ Response:', JSON.stringify(data4, null, 2));
    console.log('');
    
    // Test 5: Groq API endpoint
    console.log('📡 Test 5: Groq API GET /api/groq');
    const response5 = await fetch(`${baseURL}/api/groq`);
    const data5 = await response5.json();
    console.log('✅ Response:', JSON.stringify(data5, null, 2));
    console.log('');
    
    // Test 6: Groq API health check
    console.log('📡 Test 6: Groq API Health Check');
    const response6 = await fetch(`${baseURL}/api/groq?action=health`);
    const data6 = await response6.json();
    console.log('✅ Response:', JSON.stringify(data6, null, 2));
    console.log('');
    
    // Test 7: Groq API chat message
    console.log('📡 Test 7: Groq API Chat Message');
    const response7 = await fetch(`${baseURL}/api/groq`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Hello! Can you tell me a fun fact about AI?',
        chatId: 2,
        userName: 'Tester'
      })
    });
    const data7 = await response7.json();
    console.log('✅ Response:', JSON.stringify(data7, null, 2));
    console.log('');
    
    console.log('🎉 All tests completed successfully!');
    
  } catch (error) {
    console.error('❌ Error testing API:', error.message);
    console.log('Make sure the server is running on http://localhost:3000');
  }
};

// Run the tests
testAPI();
