import styled from 'styled-components'
import { Card } from './card'
import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

const StyleIntervalo = styled.div`
    font-size: 1.6rem;  
    input {
        width: 100px;
        font-size: 1.6rem;  
        margin: 0 20px;
    
    }
`

const IntervaloComponent = ({ min, max, setMin, setMax }) => (
    <Card color="red" >
        <h1 id="header">Intervalo de Númerios</h1>
        <StyleIntervalo>
            <span>
                <strong>Mínimo </strong>
                <input type="number" defaultValue={min} onChange={e => setMin(+e.target.value)} />
            </span>
            <span>
                <strong>Máximo </strong>
                <input type="number" defaultValue={max} onChange={e => setMax(+e.target.value)} />
            </span>
        </StyleIntervalo>
    </Card>
)

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max,
})

const mapDispatchToProps = (dispatch) => {
    return {
        setMin(novoNumero) {
            // Action creator -> action -> reducers
            dispatch(alterarNumeroMinimo(novoNumero))
        },
        setMax(novoNumero) {
            // Action creator -> action -> reducers
            dispatch(alterarNumeroMaximo(novoNumero))
        }
    }
}

export const Intervalo = connect(mapStateToProps, mapDispatchToProps)(IntervaloComponent)