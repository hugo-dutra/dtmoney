import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model
  },

  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  }
})

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

