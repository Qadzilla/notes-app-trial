import { describe, it, expect, beforeEach } from 'vitest';

const BASE_URL = 'http://localhost:3000';

describe('POST /signup', () => {
  beforeEach(async () => {
    // Note: In a real app, you would reset the database here
    // For now, just accept that users persist between tests
  });

  //   it('should create a new user with valid credentials', async () => {
  //     const uniqueUsername = `testUser_${Date.now()}`;

  //     const response = await fetch(`${BASE_URL}/signup`, {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         username: uniqueUsername,
  //         password: 'password123',
  //         confirmPassword: 'password123',
  //       }),
  //     });

  //     const data = await response.json();

  //     expect(response.status).toBe(201);
  //     expect(data).toEqual({
  //       success: true,
  //       username: uniqueUsername,
  //     });
  //   });

  it('should reject the attempt to create a new user with an empty user field', async () => {
    const emptyUsername = '';

    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: emptyUsername,
        password: 'p',
        confirmPassword: 'p',
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: 'Username and password required',
    });
  });

  it('should reject the attempt to create a new user with an empty password field', async () => {
    const emptyPassword = '';
    const uniqueUsername = `testUser${Date.now()}`;

    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: uniqueUsername,
        password: emptyPassword,
        confirmPassword: 'notEmpty',
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: 'Username and password required',
    });
  });

  it('should reject the attempt to create a new user with empty password & confirm fields', async () => {
    const emptyPassword = '';
    const uniqueUsername = `testUser${Date.now()}`;

    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: uniqueUsername,
        password: emptyPassword,
        confirmPassword: emptyPassword,
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: 'Username and password required',
    });
  });

  it('should reject the attempt to create a new user without confirming a valid password', async () => {
    const uniqueUsername = `testUser${Date.now}`;
    const uniquePassword = `passwordOf${uniqueUsername}`;

    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: uniqueUsername,
        password: uniquePassword,
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: 'Must confirm password',
    });
  });

  it('should reject the attempt to create a new user with a username belonging to an existing user', async () => {
    const uniqueUsername = `existingUser${Date.now()}`;
    const validPassword = 'password123';
    const existingUsername = uniqueUsername;

    await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: uniqueUsername,
        password: validPassword,
        confirmPassword: validPassword,
      }),
    });

    const response = await fetch(`${BASE_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: existingUsername,
        password: validPassword,
        confirmPassword: validPassword,
      }),
    });

    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data).toEqual({
      error: 'Username already exists',
    });
  });
});
