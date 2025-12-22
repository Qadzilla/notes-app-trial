// writes to the frontend console, can check this is working by going to
// web dev server on safari and viewing the console.
console.log('Front end connected to index.html muhfucka');

// sends an HTTP Get request to the backend and stores the Response object into the reponse variable.
// converts the Response object into text (extracts the neccessary information).
// prints to the dev server console, ensuring that frontend and backend are connected.
async function testConnection(): Promise<void> {
  const response: Response = await fetch('http://localhost:3000/');
  const text: string = await response.text();
  console.log(`Backend says: ${text}`);
}

// executes the defined testConnection() function.
testConnection();
