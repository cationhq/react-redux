import styled from 'styled-components'
import { Card } from './card'

const StyleIntervalo = styled.div`
    font-size: 1.6rem;  
    input {
        width: 100px;
        font-size: 1.6rem;  
        margin: 0 20px;
    
    }
`

export const Intervalo = props => (
    <Card>
        <h1 id="header">Intervalo de Númerios</h1>
        <StyleIntervalo>
            <span>
                <strong>Mínimo </strong>
                <input type="number" defaultValue={0} readOnly />
            </span>
            <span>
                <strong>Máximo </strong>
                <input type="number" defaultValue={10} readOnly />
            </span>
        </StyleIntervalo>
    </Card>
)