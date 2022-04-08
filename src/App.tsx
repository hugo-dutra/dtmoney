import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useEffect, useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/UseTransactions";
import { api } from "./services/api";

export const App = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <TransactionsProvider>
      <Header handleOpenModal={() => setIsOpen(true)} />
      <Dashboard />
      <NewTransactionModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <GlobalStyle />
    </TransactionsProvider>

  );
}


