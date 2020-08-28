/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./API/index.js":
/*!**********************!*\
  !*** ./API/index.js ***!
  \**********************/
/*! exports provided: requestWeather, requestWeatherForWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestWeather", function() { return requestWeather; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestWeatherForWeek", function() { return requestWeatherForWeek; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const TOKEN = '3497b460fb9b7efc3e6686d6481a478e';
const baseUrl = 'https://api.openweathermap.org/data/2.5'; // const secondBaseUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=current,minutely,hourly&appid=bf71a3ad72599d835997ac65a98460aa'

const Instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: baseUrl,
  timeout: 30000
});
const requestWeather = cityName => {
  return Instance("weather?q=".concat(cityName, "&appid=").concat(TOKEN));
};
const requestWeatherForWeek = ({
  lat,
  lon
}) => {
  return Instance("onecall?lat=".concat(lat, "&lon=").concat(lon, "&exclude=current,minutely,hourly&appid=").concat(TOKEN));
};

/***/ }),

/***/ "./App/index.jsx":
/*!***********************!*\
  !*** ./App/index.jsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _screens_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../screens/Home */ "./screens/Home/index.jsx");
/* harmony import */ var _screens_WeatherForWeek__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../screens/WeatherForWeek */ "./screens/WeatherForWeek/index.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");





const App = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/weatherForWeek"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_WeatherForWeek__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_screens_Home__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./actions/CityinputActions.js":
/*!*************************************!*\
  !*** ./actions/CityinputActions.js ***!
  \*************************************/
/*! exports provided: CHANGE_CITY_INPUT, CLEAR_CITY_INPUT, onChangeInput, clearInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_CITY_INPUT", function() { return CHANGE_CITY_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CITY_INPUT", function() { return CLEAR_CITY_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onChangeInput", function() { return onChangeInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInput", function() { return clearInput; });
const CHANGE_CITY_INPUT = 'city_input/CHANGE_CITY_INPUT';
const CLEAR_CITY_INPUT = 'city_input/CLEAR_CITY_INPUT';
const onChangeInput = value => ({
  type: CHANGE_CITY_INPUT,
  payload: value
});
const clearInput = () => ({
  type: CLEAR_CITY_INPUT
});

/***/ }),

/***/ "./actions/WeatherDataActions.js":
/*!***************************************!*\
  !*** ./actions/WeatherDataActions.js ***!
  \***************************************/
/*! exports provided: TOOGLE_IS_LOADING, SET_TODAY_DATA, APPEND_NEW_REQUEST_DATA, SET_ERROR_MESSAGE, CLEAR_ERROR_MESSAGE, SET_LAST_SEARCHED_CITIES, toogleIsLoading, setTodayData, appendNewRequestData, setErrorMessage, clearErrorMessage, setLastSearchedCities, getTodayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_IS_LOADING", function() { return TOOGLE_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_TODAY_DATA", function() { return SET_TODAY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPEND_NEW_REQUEST_DATA", function() { return APPEND_NEW_REQUEST_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ERROR_MESSAGE", function() { return SET_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ERROR_MESSAGE", function() { return CLEAR_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LAST_SEARCHED_CITIES", function() { return SET_LAST_SEARCHED_CITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleIsLoading", function() { return toogleIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTodayData", function() { return setTodayData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendNewRequestData", function() { return appendNewRequestData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setErrorMessage", function() { return setErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearErrorMessage", function() { return clearErrorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLastSearchedCities", function() { return setLastSearchedCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodayData", function() { return getTodayData; });
/* harmony import */ var _API_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API/index */ "./API/index.js");
/* harmony import */ var actions_CityinputActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/CityinputActions */ "./actions/CityinputActions.js");


const TOOGLE_IS_LOADING = 'weather_data/TOOGLE_IS_LOADING';
const SET_TODAY_DATA = 'weather_data/SET_TODAY_DATA';
const APPEND_NEW_REQUEST_DATA = 'weather_data/APPEND_NEW_REQUEST_DATA';
const SET_ERROR_MESSAGE = 'weather_data/SET_ERROR_MESSAGE';
const CLEAR_ERROR_MESSAGE = 'weather_data/CLEAR_ERROR_MESSAGE';
const SET_LAST_SEARCHED_CITIES = 'weather_data/SET_LAST_SEARCHED_CITIES';
const toogleIsLoading = payload => ({
  type: TOOGLE_IS_LOADING,
  payload
});
const setTodayData = payload => ({
  type: SET_TODAY_DATA,
  payload
});
const appendNewRequestData = payload => ({
  type: APPEND_NEW_REQUEST_DATA,
  payload
});
const setErrorMessage = payload => ({
  type: SET_ERROR_MESSAGE,
  payload
});
const clearErrorMessage = payload => ({
  type: CLEAR_ERROR_MESSAGE,
  payload
});
const setLastSearchedCities = payload => ({
  type: SET_LAST_SEARCHED_CITIES,
  payload
});
const getTodayData = cityName => async dispatch => {
  dispatch(clearErrorMessage());
  dispatch(toogleIsLoading(true));

  try {
    const response = await Object(_API_index__WEBPACK_IMPORTED_MODULE_0__["requestWeather"])(cityName);
    dispatch(setTodayData(response.data));
    dispatch(appendNewRequestData(response.data));
    dispatch(setLastSearchedCities(response.data.name));
    dispatch(Object(actions_CityinputActions__WEBPACK_IMPORTED_MODULE_1__["onChangeInput"])(''));
  } catch (e) {
    dispatch(setErrorMessage(e.response.data.message));
  } finally {
    dispatch(toogleIsLoading(false));
  }
};

/***/ }),

/***/ "./actions/weatherForWeekActions.js":
/*!******************************************!*\
  !*** ./actions/weatherForWeekActions.js ***!
  \******************************************/
/*! exports provided: TOOGLE_IS_LOADING, SET_SELECTED_CITY_DATA, SET_ALL_WEATHER_FOR_WEEK, toogleIsLoading, setSelectedCityData, setAllWeatherForWeek, getWeatherForWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOGLE_IS_LOADING", function() { return TOOGLE_IS_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_SELECTED_CITY_DATA", function() { return SET_SELECTED_CITY_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALL_WEATHER_FOR_WEEK", function() { return SET_ALL_WEATHER_FOR_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toogleIsLoading", function() { return toogleIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSelectedCityData", function() { return setSelectedCityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAllWeatherForWeek", function() { return setAllWeatherForWeek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeatherForWeek", function() { return getWeatherForWeek; });
/* harmony import */ var _API_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../API/index */ "./API/index.js");

const TOOGLE_IS_LOADING = 'weather_for_week/TOOGLE_IS_LOADING';
const SET_SELECTED_CITY_DATA = 'weather_for_week/SET_SELECTED_CITY_DATA';
const SET_ALL_WEATHER_FOR_WEEK = 'weather_for_week/SET_ALL_WEATHER_FOR_WEEK';
const toogleIsLoading = payload => ({
  type: TOOGLE_IS_LOADING,
  payload
});
const setSelectedCityData = payload => ({
  type: SET_SELECTED_CITY_DATA,
  payload
});
const setAllWeatherForWeek = payload => ({
  type: SET_ALL_WEATHER_FOR_WEEK,
  payload
});
const getWeatherForWeek = todayData => async dispatch => {
  dispatch(toogleIsLoading(true));

  try {
    const response = await Object(_API_index__WEBPACK_IMPORTED_MODULE_0__["requestWeatherForWeek"])({ ...todayData.coord
    });
    dispatch(setSelectedCityData(response.data));
    dispatch(setAllWeatherForWeek({
      name: todayData.name,
      data: response.data
    }));
  } catch (e) {
    console.error(e);
  } finally {
    dispatch(toogleIsLoading(false));
  }
};

/***/ }),

/***/ "./components/StyledContainer/index.js":
/*!*********************************************!*\
  !*** ./components/StyledContainer/index.js ***!
  \*********************************************/
/*! exports provided: StyledContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledContainer", function() { return StyledContainer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/es/index.js");
function _templateObject() {
  const data = _taggedTemplateLiteral(["\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    height: 100vh;\n    justify-content: center;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



const StyledContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"])(_templateObject());

/***/ }),

/***/ "./components/Title/index.js":
/*!***********************************!*\
  !*** ./components/Title/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  const data = _taggedTemplateLiteral(["\n    text-align: center;\n    ", "\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1(_templateObject(), props => {
  if (props.color) return "color:".concat(props.color);
}));

/***/ }),

/***/ "./components/TodayWeatherCard/components.js":
/*!***************************************************!*\
  !*** ./components/TodayWeatherCard/components.js ***!
  \***************************************************/
/*! exports provided: Wrapper, AlignItemsCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlignItemsCenter", function() { return AlignItemsCenter; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject2() {
  const data = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    margin: 1rem 0;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n    margin: 1rem 0;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
const AlignItemsCenter = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2());

/***/ }),

/***/ "./components/TodayWeatherCard/index.jsx":
/*!***********************************************!*\
  !*** ./components/TodayWeatherCard/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./components/TodayWeatherCard/components.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject() {
  const data = _taggedTemplateLiteral(["\n    height: 400px;\n    width: 400px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







/* harmony default export */ __webpack_exports__["default"] = (() => {
  const {
    todayData,
    errorMessage
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.weatherData);
  if (errorMessage) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    style: {
      color: "red"
    }
  }, errorMessage)));
  if (!Object.keys(todayData).length) return null;
  const {
    name,
    sys: {
      country
    },
    wind: {
      speed
    },
    main: {
      temp,
      feels_like,
      temp_min,
      temp_max,
      pressure,
      humidity
    },
    weather
  } = todayData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Wrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    body: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Location: ", name + ", " + country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Speed: ", speed), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Temp: ", temp), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Feels like: ", feels_like), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Temp min: ", temp_min), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Temp max: ", temp_max), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Pressure: ", pressure), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], null, "Humidity: ", humidity)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: "http://openweathermap.org/img/wn/".concat(weather[0].icon, "@2x.png")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["AlignItemsCenter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: "/weatherForWeek"
  }, "Weather For Weeek")));
});
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].img(_templateObject());

/***/ }),

/***/ "./components/WeatherCard/components.js":
/*!**********************************************!*\
  !*** ./components/WeatherCard/components.js ***!
  \**********************************************/
/*! exports provided: IconContainer, Icon, AnimatedBlock, Inform, WhiteTextColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconContainer", function() { return IconContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedBlock", function() { return AnimatedBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inform", function() { return Inform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteTextColor", function() { return WhiteTextColor; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "../node_modules/react-spring/web.js");
function _templateObject5() {
  const data = _taggedTemplateLiteral(["\ncolor: white;\n"]);

  _templateObject5 = function () {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = _taggedTemplateLiteral(["\ndisplay: flex;\njustify-content: space-between;\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = _taggedTemplateLiteral(["\nmargin: 5px;\npadding: 10px;\nwidth: 250px;\nheight: 300px;\nbackground: #84c3bb;\nborder-radius: 5px;\nborder: 1px solid black;\nbackground-size: cover;\nbackground-position: center center;\nbox-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);\ntransition: box-shadow 0.5s;\nwill-change: transform;\nborder: 10px solid white;\n&:hover{\n    box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);\n}\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = _taggedTemplateLiteral(["\nwidth: 120px;\nheight: 120px;\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\ndisplay: flex;\njustify-content: center;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



const IconContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject());
const Icon = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img(_templateObject2());
const AnimatedBlock = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div)(_templateObject3());
const Inform = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4());
const WhiteTextColor = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5());

/***/ }),

/***/ "./components/WeatherCard/index.jsx":
/*!******************************************!*\
  !*** ./components/WeatherCard/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "../node_modules/react-spring/web.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./components/WeatherCard/components.js");




const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];

const trans = (x, y, s) => "perspective(600px) rotateX(".concat(x, "deg) rotateY(").concat(y, "deg) scale(").concat(s, ")");

/* harmony default export */ __webpack_exports__["default"] = (({
  data
}) => {
  const [props, set] = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])(() => ({
    xys: [0, 0, 1],
    config: {
      mass: 5,
      tension: 350,
      friction: 40
    }
  }));
  const {
    dt,
    temp,
    weather
  } = data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["AnimatedBlock"], {
    className: "card",
    onMouseMove: ({
      clientX: x,
      clientY: y
    }) => set({
      xys: calc(x, y)
    }),
    onMouseLeave: () => set({
      xys: [0, 0, 1]
    }),
    style: {
      transform: props.xys.interpolate(trans)
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Inform"], null, "Date:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["WhiteTextColor"], null, new Date(dt * 1000).toDateString()), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Inform"], null, "Temp Day: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["WhiteTextColor"], null, temp.day)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Inform"], null, "Temp min:  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["WhiteTextColor"], null, temp.min)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Inform"], null, "Temp max:  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["WhiteTextColor"], null, temp.max)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Inform"], null, "Temp night:  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["WhiteTextColor"], null, temp.night)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["IconContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    src: "http://openweathermap.org/img/wn/".concat(weather[0].icon, "@2x.png")
  })));
});

/***/ }),

/***/ "./index.jsx":
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./store/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./App/index.jsx");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "../node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);






Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: _store__WEBPACK_IMPORTED_MODULE_3__["default"]
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_4__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ "./reducers/InputCityReducer.js":
/*!**************************************!*\
  !*** ./reducers/InputCityReducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_CityinputActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/CityinputActions */ "./actions/CityinputActions.js");

const initialState = {
  inputValue: ''
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case actions_CityinputActions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_CITY_INPUT"]:
      {
        return { ...state,
          inputValue: action.payload
        };
      }

    case actions_CityinputActions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CITY_INPUT"]:
      {
        return { ...state,
          inputValue: ''
        };
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/rootReducer.js":
/*!*********************************!*\
  !*** ./reducers/rootReducer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var _InputCityReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputCityReducer */ "./reducers/InputCityReducer.js");
/* harmony import */ var _weatherDataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherDataReducer */ "./reducers/weatherDataReducer.js");
/* harmony import */ var _weatherForWeekReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weatherForWeekReducer */ "./reducers/weatherForWeekReducer.js");




/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  cityInput: _InputCityReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  weatherData: _weatherDataReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  weatherForWeek: _weatherForWeekReducer__WEBPACK_IMPORTED_MODULE_3__["default"]
}));

/***/ }),

/***/ "./reducers/weatherDataReducer.js":
/*!****************************************!*\
  !*** ./reducers/weatherDataReducer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/WeatherDataActions */ "./actions/WeatherDataActions.js");
/* harmony import */ var actions_CityinputActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/CityinputActions */ "./actions/CityinputActions.js");


const initialState = {
  isLoading: false,
  todayData: {},
  allRequestsData: {},
  errorMessage: '',
  lastSearchedCities: []
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_IS_LOADING"]:
      {
        return { ...state,
          isLoading: action.payload
        };
      }

    case actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__["SET_TODAY_DATA"]:
      {
        return { ...state,
          todayData: action.payload
        };
      }

    case actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__["APPEND_NEW_REQUEST_DATA"]:
      {
        const data = { ...state.allRequestsData
        };
        data[action.payload.name.toLowerCase()] = action.payload;
        return { ...state,
          allRequestsData: data
        };
      }

    case actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__["SET_ERROR_MESSAGE"]:
      {
        return { ...state,
          errorMessage: action.payload
        };
      }

    case actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ERROR_MESSAGE"]:
      {
        return { ...state,
          errorMessage: ''
        };
      }

    case actions_CityinputActions__WEBPACK_IMPORTED_MODULE_1__["CLEAR_CITY_INPUT"]:
      {
        return { ...state,
          todayData: {}
        };
      }

    case actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_0__["SET_LAST_SEARCHED_CITIES"]:
      {
        const copyLastSC = [...state.lastSearchedCities];

        if (!copyLastSC.includes(action.payload)) {
          copyLastSC.unshift(action.payload);
          if (copyLastSC.length > 5) copyLastSC.pop();
        } // якщо таке місто вже було серед останніх п'яти, то повернути без змін, 
        // якщо не було знайдено, то записати спереді, та видалити осатнній якщо більше 5 елементів


        return { ...state,
          lastSearchedCities: copyLastSC
        };
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./reducers/weatherForWeekReducer.js":
/*!*******************************************!*\
  !*** ./reducers/weatherForWeekReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/weatherForWeekActions */ "./actions/weatherForWeekActions.js");

const initialState = {
  isLoading: false,
  selectedCityData: {},
  allWeatherForWeek: {}
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  switch (action.type) {
    case actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_0__["TOOGLE_IS_LOADING"]:
      {
        return { ...state,
          isLoading: action.payload
        };
      }

    case actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_0__["SET_SELECTED_CITY_DATA"]:
      {
        return { ...state,
          selectedCityData: action.payload
        };
      }

    case actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_0__["SET_ALL_WEATHER_FOR_WEEK"]:
      {
        const data = { ...state.allWeatherForWeek
        };
        data[action.payload.name.toLowerCase()] = action.payload.data;
        return { ...state,
          allWeatherForWeek: data
        };
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./screens/Home/index.jsx":
/*!********************************!*\
  !*** ./screens/Home/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Title */ "./components/Title/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var actions_CityinputActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/CityinputActions */ "./actions/CityinputActions.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/es/index.js");
/* harmony import */ var components_StyledContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/StyledContainer */ "./components/StyledContainer/index.js");
/* harmony import */ var actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/WeatherDataActions */ "./actions/WeatherDataActions.js");
/* harmony import */ var components_TodayWeatherCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/TodayWeatherCard */ "./components/TodayWeatherCard/index.jsx");









const Home = () => {
  const input = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.cityInput);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    isLoading,
    lastSearchedCities,
    allRequestsData
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.weatherData);

  const handleChangeInput = e => {
    dispatch(Object(actions_CityinputActions__WEBPACK_IMPORTED_MODULE_3__["onChangeInput"])(e.target.value));
  };

  const handleClearInput = () => {
    dispatch(Object(actions_CityinputActions__WEBPACK_IMPORTED_MODULE_3__["clearInput"])());
  };

  const getTodayWeather = () => {
    const checkData = allRequestsData[input.inputValue.toLowerCase()];

    if (checkData) {
      dispatch(Object(actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_6__["setTodayData"])(checkData));
    } else {
      dispatch(Object(actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_6__["getTodayData"])(input.inputValue.toLowerCase()));
    }
  };

  const handleClickOnCity = e => {
    const selectedCity = allRequestsData[e.target.value.toLowerCase()];
    dispatch(Object(actions_WeatherDataActions__WEBPACK_IMPORTED_MODULE_6__["setTodayData"])(selectedCity));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_StyledContainer__WEBPACK_IMPORTED_MODULE_5__["StyledContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Title__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "#007bff"
  }, " Weather App"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    placeholder: "City name",
    value: input.inputValue,
    onChange: handleChangeInput
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "primary",
    onClick: getTodayWeather
  }, "Search")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: "1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "danger",
    onClick: handleClearInput
  }, "Clear"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["ButtonGroup"], null, lastSearchedCities.length > 0 && lastSearchedCities.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    color: "link",
    key: item,
    onClick: handleClickOnCity,
    value: item
  }, item))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    sm: "12",
    md: {
      size: 6,
      offset: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Spinner"], {
    color: "primary"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TodayWeatherCard__WEBPACK_IMPORTED_MODULE_7__["default"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./screens/WeatherForWeek/index.jsx":
/*!******************************************!*\
  !*** ./screens/WeatherForWeek/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "../node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var components_StyledContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/StyledContainer */ "./components/StyledContainer/index.js");
/* harmony import */ var actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/weatherForWeekActions */ "./actions/weatherForWeekActions.js");
/* harmony import */ var components_WeatherCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/WeatherCard */ "./components/WeatherCard/index.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
function _templateObject2() {
  const data = _taggedTemplateLiteral([""]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    padding-top: 1rem;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










const WeatherForWeek = props => {
  // const input = useSelector(state => state.cityInput)
  let history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["useHistory"])();
  const {
    todayData
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.weatherData);
  const {
    selectedCityData,
    isLoading,
    allWeatherForWeek
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.weatherForWeek);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  const handleGoToBack = () => {
    history.push("/");
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const data = allWeatherForWeek[todayData.name.toLowerCase()];

    if (data) {
      dispatch(Object(actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_5__["setSelectedCityData"])(data));
    } else {
      dispatch(Object(actions_weatherForWeekActions__WEBPACK_IMPORTED_MODULE_5__["getWeatherForWeek"])(todayData));
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_StyledContainer__WEBPACK_IMPORTED_MODULE_4__["StyledContainer"], null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: "12",
    md: {
      size: 6,
      offset: 6
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
    color: "primary"
  }))) : Object.keys(selectedCityData).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "primary",
    onClick: handleGoToBack
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WeatherCardsContainer, null, selectedCityData.daily.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_WeatherCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: item
  })))) : null);
};

const WeatherCardsContainer = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject2());
/* harmony default export */ __webpack_exports__["default"] = (WeatherForWeek);

/***/ }),

/***/ "./store/index.js":
/*!************************!*\
  !*** ./store/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "../node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "../node_modules/redux-thunk/es/index.js");
/* harmony import */ var reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers/rootReducer */ "./reducers/rootReducer.js");



let middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]];
const enhancer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware), window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, enhancer);
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.jsx */"./index.jsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map