const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyCIaxnvdccWC7DDZqxZBS7lhaBBClD3Cxs");



async function run() {

    const generationConfig = {
        stopSequences: ["red"],
        maxOutputTokens: 200,
        temperature: 0.9,
        topP: 0.1,
        topK: 16,
      };

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",generationConfig});

    const prompt = "Write a essay on computer"
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  run();