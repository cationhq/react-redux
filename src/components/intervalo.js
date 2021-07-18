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

export const Intervalo = props => {
    const [[min, max], [setMin, setMax]] = props.min_max

    return (
        <Card>
            <h1 id="header">Intervalo de Númerios</h1>
            <StyleIntervalo>
                <span>
                    <strong>Mínimo </strong>
                    <input type="number" value={min} onChange={e => setMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo </strong>
                    <input type="number" value={max} onChange={e => setMax(+e.target.value)} />
                </span>
            </StyleIntervalo>
        </Card>
    )
}