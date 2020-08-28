import React from 'react'
import { useSpring } from 'react-spring'
import { AnimatedBlock, Inform, WhiteTextColor, IconContainer, Icon } from './components'


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export default ({ data }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const { dt, temp, weather } = data

    return <AnimatedBlock
        className="card"
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
    >
        <Inform>Date:<WhiteTextColor>{new Date(dt * 1000).toDateString()}</WhiteTextColor> </Inform>
        <Inform>Temp Day: <WhiteTextColor>{temp.day}</WhiteTextColor></Inform>
        <Inform>Temp min:  <WhiteTextColor>{temp.min}</WhiteTextColor></Inform>
        <Inform>Temp max:  <WhiteTextColor>{temp.max}</WhiteTextColor></Inform>
        <Inform>Temp night:  <WhiteTextColor>{temp.night}</WhiteTextColor></Inform>
        <IconContainer>
            <Icon src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
        </IconContainer>
    </AnimatedBlock>

}
