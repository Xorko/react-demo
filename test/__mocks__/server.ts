import { setupServer } from 'msw/node';
import { handlers } from 'test/__mocks__/handlers';

export const server = setupServer(...handlers);
