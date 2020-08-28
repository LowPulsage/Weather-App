import React, { useEffect } from 'react'
import { useSelector, useDispatch, } from 'react-redux'
import { Spinner, Button, Col, Row, Container } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { StyledContainer } from 'components/StyledContainer'
import { setSelectedCityData, getWeatherForWeek } from 'actions/weatherForWeekActions'
import WeatherCard from 'components/WeatherCard'
import styled from 'styled-components'

const WeatherForWeek = (props) => {
    // const input = useSelector(state => state.cityInput)
    let history = useHistory();
    const { todayData } = useSelector(state => state.weatherData)
    const { selectedCityData, isLoading, allWeatherForWeek } = useSelector(state => state.weatherForWeek)
    const dispatch = useDispatch()

    const handleGoToBack = () => {
        history.push("/");
    }

    useEffect(() => {
        const data = allWeatherForWeek[todayData.name.toLowerCase()]
        if (data) {
            dispatch(setSelectedCityData(data))
        } else {
            dispatch(getWeatherForWeek(todayData))
        }
    }, [])


    return <StyledContainer>
        {isLoading ? <Row>
            <Col sm="12" md={{ size: 6, offset: 6 }}>
                <Spinner color="primary" />
            </Col>
        </Row> : Object.keys(selectedCityData).length > 0 ?
                <Wrapper>
                    <Button color='primary' onClick={handleGoToBack}>Back</Button>
                    <WeatherCardsContainer>
                        {selectedCityData.daily.map(item => <WeatherCard data={item} />)}
                    </WeatherCardsContainer>
                </Wrapper>


                : null}
    </StyledContainer>
}

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;
`

const Wrapper = styled.div``

export default WeatherForWeek