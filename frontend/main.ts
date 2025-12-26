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

// store the HTML element signup button in the variable signupBtn
const signupBtn = document.getElementById('signupBtn') as HTMLButtonElement;
// store the HTML user username input in the variable signupUsernameInput
const signupUsernameInput = document.getElementById(
  'signupUsername'
) as HTMLInputElement;
// store the HTML user password input in the variable signupPasswordInput
const signupPasswordInput = document.getElementById(
  'signupPassword'
) as HTMLInputElement;
// store the HTML user confirm password input in the variable signupConfirmPasswordInput
const signupConfirmPasswordInput = document.getElementById(
  'confirmPassword'
) as HTMLInputElement;
// store the HTML error div element in the variable signupErrorDiv
const signupErrorDiv = document.getElementById(
  'signupErrorMessage'
) as HTMLDivElement;

// user signup function for error handling logic and HTTP requests to the backend
async function signup(): Promise<void> {
  const username = signupUsernameInput?.value.trim();
  const password = signupPasswordInput?.value.trim();
  const confirmPassword = signupConfirmPasswordInput?.value.trim();

  if (signupErrorDiv) {
    signupErrorDiv.textContent = '';
  }
  if (!username || !password) {
    if (signupErrorDiv) {
      signupErrorDiv.textContent = 'Please enter both username and password';
    }
    return;
  }
  if (password !== confirmPassword) {
    if (signupErrorDiv) {
      signupErrorDiv.textContent = 'Passwords must match';
    }
    return;
  }
  try {
    const response = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ username, password, confirmPassword }),
    });
    const data = await response.json();
    if (response.ok) {
      console.log('Signup successful!', data);
      alert(`Account created fir ${data.username}!`);
      signupUsernameInput.value = '';
      signupPasswordInput.value = '';
      signupConfirmPasswordInput.value = '';
    } else {
      if (signupErrorDiv) {
        signupErrorDiv.textContent = data.error;
      }
    }
  } catch (error) {
    console.error('Singup error:', error);
    if (signupErrorDiv) {
      signupErrorDiv.textContent = 'Connection error. Is the server running?';
    }
  }
}

signupBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  signup();
});
