import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Header handleOpenModal={() => setIsOpen(true)} />
      <Dashboard />
      <NewTransactionModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} />
      <GlobalStyle />
    </>
  );
}


