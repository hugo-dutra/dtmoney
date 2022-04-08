import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

export type TransactionType = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

type PropsTransactionsContext = {
  data: TransactionType[],
  setData: React.Dispatch<React.SetStateAction<TransactionType[]>>;
}

const initialState: PropsTransactionsContext = {
  data: [],
  setData: () => { }
};

export const TransactionContext = createContext<PropsTransactionsContext>(initialState);

export const TransactionsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(initialState.data)
  return (
    <TransactionContext.Provider value={{ data, setData }}>
      {children}
    </TransactionContext.Provider>
  )
}