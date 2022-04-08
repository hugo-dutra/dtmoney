import { Container } from "./styles"
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';
import { useContext, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/UseTransactions";


export const Summary = () => {
    const { data } = useTransactions();
    const [entradas, setEntradas] = useState(0);
    const [saidas, setSaidas] = useState(0);
    const [total, setTotal] = useState(0);
    console.clear();
    useEffect(() => {
        const totalEntradas = data
            .filter(dt => dt.type === 'deposit')
            .map(dt => dt.amount)
            .reduce((prev, curr) => prev + curr, 0)
        const totalSaidas = data
            .filter(dt => dt.type === 'withdraw')
            .map(dt => dt.amount)
            .reduce((prev, curr) => prev + curr, 0)
        setEntradas(totalEntradas)
        setSaidas(totalSaidas)
        setTotal(totalEntradas - totalSaidas)
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