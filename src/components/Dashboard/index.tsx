import { Summary } from "../summary/Summary"
import { TransactionsTable } from "../TransactionTable"
import { Container } from "./styles"

export const Dashboard = () => {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    )
}
