import { Container } from "./styles"
import incomeImg from '../../assets/Entradas.svg';
import outcomeImg from '../../assets/Saídas.svg';
import totalImg from '../../assets/Total.svg';


export const Summary = () => {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$ 10000</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>R$ -5000</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Entradas" />
                </header>
                <strong>R$ 5000</strong>
            </div>
        </Container>
    )
}