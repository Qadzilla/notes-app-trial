# Notes App - Learnthrough-1

A simple notes app with user authentication. Each user can only see their own notes.

## Learning Objectives

With the rapid development of AI tools in the coding space, I felt like i was losing the skills I developed at university. Instead of using AI for efficiency and faster building, I have grown dependent on it. In an effort to combat my dependancy on it, I have set a goal to re-build my foundations in programming by essentially starting at the very basics with this project.

For this version of my notes-app I prompted Claude code to breakdown every line of code and architecture-concepts for me to re-write the code mannualy and take notes to deepen my understanding of everything. After this I will re do the project without any help from AI to reinforce skills, and gradually move on to more complex projects.

## Tools & Skills Covered

- **Comments**: Line by line comments for studying purposes, messy but
  neccessary for now
- **User Authentication**: Sign up, login, logout
- **Multi-user Data**: Each user has seperate notes
- **TypeScript**: Frontend and backend both built with TypeScript
- **Testing**: Unit tests for both frontend and backend
- **API Design**: RESTful endpoints

## Project Structure

- Made using 'brew install tree' -> tree -L 3 \
  -I "node_modules|package-lock.json|.git|.vscode|eslint|prettier|vite.config.ts|tsconfig.json|package.json|eslint.config.mjs"

```
notes-build/
├── backend
│   ├── server.test.ts
│   ├── server.ts
│   └── uuid.ts
├── frontend
│   ├── index.html
│   ├── main.test.ts
│   ├── main.ts
│   ├── signup.html
│   └── style.css
└── READ.md
```

## Tech Used

- HTML, CSS
- EXPRESS, CORS
- TYPESCRIPT
- VITE, VITEST

## Architecture

# index.html

- The applications landing page
- User is asked for login credentials
- If the user does not have an account they can navigate to the signup page

# signup.html

- The signup page for creating a user account
- User can navigate back to login if they already have an account

# main.ts

- For handling Javascript logic and communicating with the backend

# style.css

- Style sheet for all frontend elements

# main.test.ts

- Testing suite for Javascript components

# server.ts

- Handles all HTTP requests
- Sends HTTP responses to the frontend
- Stores User and Note data

# server.test.ts

- Testing suite for server

# uuid.ts

- ###$^$_&#^$_&#^$&*#^$&_^$&_

## What Can Be Improved

- For more secure authentication and scale, a database system could be implemented

- User notes sharing

- E-mail signup

- 2 factor authentication
