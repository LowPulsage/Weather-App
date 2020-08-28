import React from 'react'
import Title from 'components/Title'
import { useSelector, useDispatch } from 'react-redux'
import { onChangeInput, clearInput } from 'actions/CityinputActions'
import { Row, Col, Input, Button, Spinner, ButtonGroup } from 'reactstrap'
import { StyledContainer } from 'components/StyledContainer'
import { getTodayData, setTodayData } from 'actions/WeatherDataActions'
import TodayWeatherCard from 'components/TodayWeatherCard'

const Home = () => {
    const input = useSelector(state => state.cityInput)
    const dispatch = useDispatch()
    const { isLoading, lastSearchedCities, allRequestsData } = useSelector(state => state.weatherData)

    const handleChangeInput = (e) => {
        dispatch(onChangeInput(e.target.value))
    }

    const handleClearInput = () => {
        dispatch(clearInput())
    }

    const getTodayWeather = () => {
        const checkData = allRequestsData[input.inputValue.toLowerCase()]
        if (checkData) {
            dispatch(setTodayData(checkData))
        } else {
            dispatch(getTodayData(input.inputValue.toLowerCase()))
        }
    }

    const handleClickOnCity = (e) => {
        const selectedCity = allRequestsData[e.target.value.toLowerCase()]
        dispatch(setTodayData(selectedCity))
    }

    return <StyledContainer>
        <Row>
            <Col>
                <Title color='#007bff'> Weather App</Title>
            </Col>
        </Row>
        <Row >
            <Col xs="10">
                <Input placeholder='City name' value={input.inputValue} onChange={handleChangeInput} />
            </Col>
            <Col xs='1'>
                <Button color='primary' onClick={getTodayWeather}>Search</Button>
            </Col>
            <Col xs='1'>
                <Button color='danger' onClick={handleClearInput}>Clear</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <ButtonGroup>
                    {
                        lastSearchedCities.length > 0 &&
                        lastSearchedCities.map(item =>
                            <Button color="link" key={item} onClick={handleClickOnCity} value={item}>
                                {item}
                            </Button>
                        )
                    }
                </ButtonGroup>
            </Col>
        </Row>
        <Row>
            {isLoading ?
                <Col sm="12" md={{ size: 6, offset: 6 }}>
                    <Spinner color="primary" />
                </Col> :
                <Col>
                    <TodayWeatherCard />
                </Col>
            }

        </Row>
    </StyledContainer >
}

export default Home