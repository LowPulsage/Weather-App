import styled from 'styled-components'

export default styled.h1`
    text-align: center;
    ${(props) => {
        if (props.color) return `color:${props.color}`
    }}
`