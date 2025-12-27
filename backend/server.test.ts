import { describe, it, expect, beforeEach } from 'vitest';

const BASE_URL = 'http://localhost:3000';

describe('POST /signup', () => {
  beforeEach(async () => {
    // Note: In a real app, you would reset the database here
    // For now, just accept that users persist between tests
  });
});

it('should create a new user with valid credentials', async () => {
  const uniqueUsername = `testUser_${Date.now()}`;

  const response = await fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application.json' },
    body: JSON.stringify({
      username: uniqueUsername,
      password: 'password123',
      confirmPassword: 'password123',
    }),
  });

  const data = await response.json();

  expect(response.status).toBe(201);
  expect(data).toEqual({
    success: true,
    username: uniqueUsername,
  });
});
