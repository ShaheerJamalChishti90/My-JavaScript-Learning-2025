const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to serve static files (your HTML file)
app.use(express.static(path.join(__dirname, '')));

// This line is important! It enables Express to parse JSON data.
app.use(express.json());

// Define a hardcoded set of questions and answers.
const hardcodedAnswers = {
  "what is your name?": "My name is Express Bot.",
  "how are you?": "I'm doing great, thanks for asking!",
  "what is express.js?": "Express.js is a web framework for Node.js.",
  "what is the meaning of life?": "That's a bit too complex for me to answer right now.",
  "what is node.js?": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  "what is a get request?": "A GET request is used to retrieve data from a specified resource.",
  "what is a post request?": "A POST request is used to send data to a server to create or update a resource.",
  "how to run an express app?": "You can run an Express app by using the 'node' command followed by the name of your server file, for example, 'node app.js'.",
  "what is middleware?": "Middleware functions are functions that have access to the request object, the response object, and the next middleware function in the application’s request-response cycle."
};

// A POST route to handle user questions.
app.post('/ask', (req, res) => {
  // Get the question from the request body.
  const userQuestion = req.body.question.toLowerCase().trim();

  // Look up the hardcoded answer.
  const answer = hardcodedAnswers[userQuestion] || "I don't have an answer for that question.";

  // Send the answer back as a JSON response.
  res.json({ answer: answer });
});

// Serve the index.html file on the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Chatbot server listening on port ${port}`);
});
