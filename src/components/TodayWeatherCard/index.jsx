import React from 'react'
import { Card, CardTitle, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'
import { Wrapper, AlignItemsCenter } from './components'
import { Link } from "react-router-dom";
import styled from 'styled-components'


export default () => {
    const { todayData, errorMessage } = useSelector(state => state.weatherData)

    if (errorMessage) return <Wrapper>
        <Card body>
            <CardTitle style={{ color: "red" }}>{errorMessage}</CardTitle>
        </Card>
    </Wrapper>

    if (!Object.keys(todayData).length) return null

    const {
        name,
        sys: { country },
        wind: { speed },
        main: {
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity
        },
        weather
    } = todayData

    return <Wrapper>
        <Card body>
            <Row>
                <Col>
                    <CardTitle>Location: {name + ", " + country}</CardTitle>
                    <CardTitle>Speed: {speed}</CardTitle>
                    <CardTitle>Temp: {temp}</CardTitle>
                    <CardTitle>Feels like: {feels_like}</CardTitle>
                    <CardTitle>Temp min: {temp_min}</CardTitle>
                    <CardTitle>Temp max: {temp_max}</CardTitle>
                    <CardTitle>Pressure: {pressure}</CardTitle>
                    <CardTitle>Humidity: {humidity}</CardTitle>
                </Col>
                <Col>
                    <Icon src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />

                </Col>
            </Row>
        </Card>
        <AlignItemsCenter>
            <Link to="/weatherForWeek">Weather For Weeek</Link>
        </AlignItemsCenter>
    </Wrapper>
}

const Icon = styled.img`
    height: 400px;
    width: 400px;
`