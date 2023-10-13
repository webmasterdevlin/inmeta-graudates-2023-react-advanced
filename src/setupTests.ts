// jest-dem adds custom jest matchers for asserting on DOM nodes
// allows you to do thing like:
// expect(element).toHaveTextContent(/react/)
import '@testing-library/jest-dom';

import { cleanup } from '@testing-library/react';
import { fetch } from 'cross-fetch';
import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';

// replace fetch with cross-fetch
global.fetch = fetch;

// Establish API mocking before all tests
beforeAll(() => {
  return server.listen();
});

// Reset any request handlers that we may add during the tests,
// so they don't affect others tests
afterEach(() => {
  return server.resetHandlers();
});

// Clean up after the tests are finished.
afterAll(() => {
  cleanup();
  return server.close();
});
