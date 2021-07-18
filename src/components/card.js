import styled from 'styled-components'

const getColor = props => {
    let colors = {
        red: { primaryColor: '#bf0044', secundaryColor: '#f50057' },
        blue: { primaryColor: '#1565c0', secundaryColor: '#2196f3' },
        green: { primaryColor: '#2e7d32', secundaryColor: '#4caf50' },
        purple: { primaryColor: '#6A1Baa', secundaryColor: '#9c27b0' },
    }

    return colors[props.color || 'red']
}

const StyleCard = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 5px;
    
    background-color: ${(props) => getColor(props).primaryColor};
    color: white;

    .header {
        padding: 5px;
        background-color: ${(props) => getColor(props).secundaryColor};
    }
    .content {
        padding: 10px;
    }
`

export const Card = props => {
    const { children } = props
    return (
        <StyleCard {...props}>
            <div className="header">
                {children.filter(child => child.props.id === 'header')}
            </div>
            <div className="body">
                {children.filter(child => child.props.id === 'body')}
            </div>
            <div className="content">
                {children.filter(child => child.props.id !== 'body' && child.props.id !== 'header')}
            </div>
        </StyleCard>)
}