import styled from 'styled-components'
import { Card } from './card'
import { connect } from 'react-redux'


const StyleSorteio = styled.div`    
`

const SorteioComponent = props => (
    <Card color="green">
        <h1 id="header">Sorteio de um Número</h1>
        <StyleSorteio>
            <span>Resultado: </span>
            <strong>7</strong>
        </StyleSorteio>
    </Card>
)

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max,
})

export const Sorteio = connect(mapStateToProps)(SorteioComponent)