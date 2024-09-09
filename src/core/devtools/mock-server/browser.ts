import { setupWorker } from 'msw/browser';
import { userHandler } from './user.handler';

const handlers = [...userHandler];

export const MockServiceWorker = setupWorker(...handlers);
