import styled from 'styled-components'
import { Card } from './card'
import { connect } from 'react-redux'


const StyleSorteio = styled.div`    
`

const SorteioComponent = ({ min, max }) => (
    <Card color="green">
        <h1 id="header">Sorteio de um Número</h1>
        <StyleSorteio>
            <span>Resultado: </span>
            <strong>{parseInt(Math.random() * max - min) + min}</strong>
        </StyleSorteio>
    </Card>
)

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max,
})

export const Sorteio = connect(mapStateToProps)(SorteioComponent)