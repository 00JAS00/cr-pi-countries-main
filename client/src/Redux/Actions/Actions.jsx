import {
  GET_COUNTRIES,
  GET_BYID,
  GET_BYNAME,
  GET_ACTIVITIES,
  POST_ACTIVITY,
  ORDER_COUNTRIES,
  ORDER_POPULATION,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  NEXT_PAGE,
  PREV_PAGE
} from "./Types";
import axios from "axios";
// eslint-disable-next-line react-refresh/only-export-components
const URL = "http://localhost:3001/";
export const getCountries = () => async (dispatch) => {
  const response = await axios.get(URL + "countries");
  const data = response.data;
  return dispatch({
    type: GET_COUNTRIES,
    payload: data,
  });
};
export const getCountry = (id) => {
  return async (dispatch) => {
    const response = await axios.get(URL + "countries/" + id);
    const data = response.data;
    return dispatch({
      type: GET_BYID,
      payload: data,
      });
    }
};


export const getCountriesByName = (name) => async (dispatch) => {
  const response = await axios.get(URL + `countries?name=${name}`);
  const data = response.data;
  return dispatch({
    type: GET_BYNAME,
    payload: data,
  });
};
export const getActivities = () => async (dispatch) => {
  const response = await axios.get(URL + "activities");
  const data = response.data;
  return dispatch({
    type: GET_ACTIVITIES,
    payload: data,
  });
};
export const postActivity = (activity) => async (dispatch) => {
  const response = await axios.post(URL + "activities", activity);
  const data = response.data;
  return dispatch({
    type: POST_ACTIVITY,
    payload: data,
  });
}
export const orderByName = (payload) => {
  return {
    type: ORDER_COUNTRIES,
    payload,
  };
};
export const orderPopulation = (payload) => {
  return {
    type: ORDER_POPULATION,
    payload,
  };
};
export const filterByContinent = (payload) => {
  return {
    type:FILTER_BY_CONTINENT,
    payload:payload,
  };
};
export const filterByActivity = (payload) => {
  return {
    type: FILTER_BY_ACTIVITY,
    payload:payload,
  };
};
export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};
export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};
