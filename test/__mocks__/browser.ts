import { setupWorker } from 'msw';
import { handlers } from 'test/__mocks__/handlers';

export const worker = setupWorker(...handlers);
