export {};

if (typeof window === 'undefined') {
  const { server } = require('test/__mocks__/server');
  server.listen();
} else {
  const { worker } = require('test/__mocks__/browser');
  worker.start();
}
