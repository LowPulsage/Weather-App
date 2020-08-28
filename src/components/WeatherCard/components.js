import styled from 'styled-components'
import { animated } from 'react-spring'


export const IconContainer = styled.div`
display: flex;
justify-content: center;
`

export const Icon = styled.img`
width: 120px;
height: 120px;
`

export const AnimatedBlock = styled(animated.div)`
margin: 5px;
padding: 10px;
width: 250px;
height: 300px;
background: #84c3bb;
border-radius: 5px;
border: 1px solid black;
background-size: cover;
background-position: center center;
box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
transition: box-shadow 0.5s;
will-change: transform;
border: 10px solid white;
&:hover{
    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
}
`
export const Inform = styled.div`
display: flex;
justify-content: space-between;
`

export const WhiteTextColor = styled.div`
color: white;
`