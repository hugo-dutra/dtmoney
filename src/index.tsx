import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction 2',
          amount: 450,
          type: 'deposit',
          category: 'Transport',
          createAt: new Date()
        }
      ]
    })
  }
})

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

