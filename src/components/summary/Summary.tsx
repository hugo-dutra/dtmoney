import { Container } from "./styles"
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';
import { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../../TransactionsContext";

export const Summary = () => {

    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [total, setTotal] = useState(0);
    const { data } = useContext(TransactionContext);
    useEffect(() => {

    }, [data])


    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ {entradas}</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>R$ -{saidas}</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ {total}</strong>
            </div>
        </Container>
    )
}