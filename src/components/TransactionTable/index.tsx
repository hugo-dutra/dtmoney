import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container } from "./styles"

type Transaction = {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export const TransactionsTable = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    useEffect(() => {
        api('transactions')
            .then(response => setTransactions(response.data.transactions))
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(tran => (<tr key={tran.id}>
                        <td>{tran.title}</td>
                        <td className={tran.type}> {new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(tran.amount)}</td>
                        <td>{tran.category}</td>
                        <td className={tran.type}> {new Intl.DateTimeFormat('pt-Br').format(new Date(tran.createdAt))}</td>
                    </tr>))}
                </tbody>
            </table>
        </Container>
    )
}
