import styled from 'styled-components'
import { Card } from './card'
import { connect } from 'react-redux'


const StyleMedia = styled.div` 
`

const MediaComponent = props => (
    <Card Card color="blue" >
        <h1 id="header">Média dos Números</h1>
        <StyleMedia>
            <span>Resultado: </span>
            <strong>{(props.min + props.max) / 2}</strong>
        </StyleMedia>
    </Card >
)

const mapStateToProps = state => ({
    min: state.numeros.min,
    max: state.numeros.max,
})

export const Media = connect(mapStateToProps)(MediaComponent)