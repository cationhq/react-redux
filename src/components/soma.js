import styled from 'styled-components'
import { Card } from './card'
import { connect } from 'react-redux'


const StyleSoma = styled.div`
`

const SomaComponent = props => (
    <Card color="purple">
        <h1 id="header">Soma dos Números</h1>
        <StyleSoma>
            <span>Resultado: </span>
            <strong>{props.min + props.max}</strong>
        </StyleSoma>
    </Card>
)

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max,
})

export const Soma = connect(mapStateToProps)(SomaComponent)