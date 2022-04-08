import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { TransactionContext } from "../../TransactionsContext";
import { Container } from "./styles"


export const TransactionsTable = () => {
    const { data } = useContext(TransactionContext);
    useEffect(() => {
        console.log(data);
    }, [data])



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
                    {data.map(tran => (<tr key={tran.id}>
                        <td>{tran.id}</td>
                        <td>{tran.title}</td>
                        <td className={tran.type}> {new Intl.NumberFormat('pt-Br', { style: 'currency', currency: 'BRL' }).format(tran.amount)}</td>
                        <td>{tran.category}</td>
                        <td className={tran.type}> {new Intl.DateTimeFormat('pt-Br').format(new Date(tran.createdAt!))}</td>
                    </tr>))}
                </tbody>
            </table>
        </Container>
    )
}
