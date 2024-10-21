let API_BASE_URL;

if (process.env.NODE_ENV === 'development') {
    // Use production API domain
    API_BASE_URL = 'https://ai-factory-api.apoorvnema.com';
} else {
    // Use localhost API domain
    API_BASE_URL = 'http://localhost:3000'; // Adjust the port as needed
}

// Accessing environment variables for the API keys
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const GEMINI_PRO_API = process.env.GEMINI_PRO_API;

const API_CONFIG = {
    API_BASE_URL,
    OPENAI_API_KEY, // Include the OpenAI API key
    GEMINI_PRO_API, // Include the Geminai Pro API key
    TIMEOUT: 5000, // Example: API request timeout in milliseconds
};

export default API_CONFIG;