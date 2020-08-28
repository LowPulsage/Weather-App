export const CHANGE_CITY_INPUT = 'city_input/CHANGE_CITY_INPUT'
export const CLEAR_CITY_INPUT = 'city_input/CLEAR_CITY_INPUT'

export const onChangeInput = (value) => ({ type: CHANGE_CITY_INPUT, payload: value })
export const clearInput = () => ({ type: CLEAR_CITY_INPUT })